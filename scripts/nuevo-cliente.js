#!/usr/bin/env node

/**
 * Script automatizado para generar códigos de pago y desplegarlos en Netlify
 * Uso: npm run nuevo-cliente
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function generateCode(clientName) {
  const prefix = 'PV';
  const cleanName = clientName.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 6);
  const random = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `${prefix}-${cleanName}-${random}`;
}

function updateValidateCodeFunction(codesData) {
  const validateCodePath = path.join(__dirname, '../netlify/functions/validate-code.js');

  const functionContent = `const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Códigos de pago - Actualizados automáticamente por npm run nuevo-cliente
const CODES = ${JSON.stringify(codesData, null, 2)};

exports.handler = async (event, context) => {
  console.log('validate-code function called', { method: event.httpMethod });

  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { code } = JSON.parse(event.body);

    if (!code) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Código requerido' })
      };
    }

    console.log('Available codes:', CODES.codes.length);

    // Find the code
    const paymentCode = CODES.codes.find(c => c.code === code.toUpperCase());

    if (!paymentCode) {
      console.log('Code not found:', code);
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Código no válido' })
      };
    }

    if (paymentCode.status === 'paid') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Este código ya ha sido utilizado' })
      };
    }

    if (paymentCode.status === 'cancelled') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Este código ha sido cancelado' })
      };
    }

    // Create Stripe PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(paymentCode.amount * 100), // Convert to cents
      currency: 'eur',
      metadata: {
        code: paymentCode.code,
        clientName: paymentCode.clientName,
        description: paymentCode.description
      },
      receipt_email: paymentCode.email,
      description: \`\${paymentCode.description} - \${paymentCode.paymentType}\`
    });

    console.log('PaymentIntent created successfully:', paymentIntent.id);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
        paymentData: {
          clientName: paymentCode.clientName,
          amount: paymentCode.amount,
          paymentType: paymentCode.paymentType,
          description: paymentCode.description
        }
      })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Error al procesar la solicitud' })
    };
  }
};
`;

  fs.writeFileSync(validateCodePath, functionContent);
}

async function main() {
  console.log('\n🚀 Generador Automatizado de Códigos de Pago - PageVolt\n');

  // Recoger datos del cliente
  const clientName = await question('Nombre del negocio: ');
  const email = await question('Email del cliente: ');
  const priceInput = await question('Precio total del proyecto (€): ');
  const price = parseFloat(priceInput);

  if (isNaN(price) || price <= 0) {
    console.log('\n❌ Error: El precio debe ser un número válido mayor que 0\n');
    rl.close();
    process.exit(1);
  }

  const paymentType = await question('Tipo de pago (1: Primer 50%, 2: Segundo 50%): ');
  const isFirst = paymentType === '1';
  const description = await question('Descripción (ej: Web Esencial): ');

  console.log('\n⚙️  Procesando...\n');

  // Generar código y calcular amount correctamente
  const code = generateCode(clientName);
  const amount = parseFloat((price / 2).toFixed(2));

  console.log(`Debug: Precio total: €${price}, Amount (50%): €${amount}`);

  const newCode = {
    code: code,
    clientName: clientName,
    amount: amount,
    paymentType: isFirst ? 'Primer pago (50%)' : 'Segundo pago (50%)',
    totalProject: price,
    status: 'pending',
    createdAt: new Date().toISOString(),
    description: `${description} - ${clientName}`,
    email: email
  };

  // Guardar en archivo local data/payment-codes.json
  const codesPath = path.join(__dirname, '../data/payment-codes.json');
  const codesData = JSON.parse(fs.readFileSync(codesPath, 'utf8'));
  codesData.codes.push(newCode);
  fs.writeFileSync(codesPath, JSON.stringify(codesData, null, 2));
  console.log('✅ Código guardado en data/payment-codes.json');

  // Actualizar netlify/functions/validate-code.js con los códigos
  updateValidateCodeFunction(codesData);
  console.log('✅ Códigos actualizados en netlify/functions/validate-code.js');

  // Git commit y push
  console.log('\n📦 Haciendo commit y push a git...');
  try {
    execSync('git add data/payment-codes.json netlify/functions/validate-code.js', {
      cwd: path.join(__dirname, '..'),
      stdio: 'inherit'
    });
    execSync(`git commit -m "Nuevo código de pago: ${code} - ${clientName}"`, {
      cwd: path.join(__dirname, '..'),
      stdio: 'inherit'
    });
    execSync('git push', { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
    console.log('✅ Cambios subidos a git');
    console.log('🚀 Netlify desplegará automáticamente en 1-2 minutos');
  } catch (error) {
    console.log('⚠️  Error con git:', error.message);
  }

  // Mostrar resultado final
  console.log('\n' + '━'.repeat(80));
  console.log('🎉 ¡TODO LISTO!');
  console.log('━'.repeat(80));
  console.log(`\n✅ Código para el cliente: ${code}`);
  console.log(`💰 Cantidad: €${amount.toFixed(2)} (${isFirst ? 'Primer' : 'Segundo'} pago - 50%)`);
  console.log(`📧 Email: ${email}`);
  console.log('\nEl código estará activo en 1-2 minutos después del deploy.');
  console.log('\nMensaje sugerido para Instagram:');
  console.log('─'.repeat(80));
  console.log(`¡Hola! 👋

Para procesar el pago de tu web (€${amount.toFixed(2)}):
🔗 https://cosmic-souffle-1bb721.netlify.app/pago

Tu código: ${code}

¡Es 100% seguro con Stripe! 🔒`);
  console.log('─'.repeat(80));
  console.log('');

  rl.close();
}

main().catch(error => {
  console.error('❌ Error:', error);
  rl.close();
  process.exit(1);
});
