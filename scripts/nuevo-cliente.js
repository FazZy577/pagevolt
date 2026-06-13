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
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno
dotenv.config({ path: path.join(__dirname, '../.env') });

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

async function updateNetlifyEnvVar(siteId, token, key, value) {
  console.log('\n📡 Actualizando variable de entorno en Netlify...');

  try {
    // Usar el endpoint correcto de Netlify API para actualizar env var
    const response = await fetch(
      `https://api.netlify.com/api/v1/sites/${siteId}/env/${key}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          key: key,
          values: [
            {
              value: value,
              context: 'all'
            }
          ]
        })
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.error('Error response:', responseData);
      throw new Error(`Error al actualizar variable: ${response.status} ${response.statusText}`);
    }

    console.log('✅ Variable PAYMENT_CODES actualizada en Netlify');

    // Triggerar un nuevo deploy para aplicar los cambios
    console.log('\n🚀 Triggerando nuevo deploy en Netlify...');
    const deployResponse = await fetch(
      `https://api.netlify.com/api/v1/sites/${siteId}/builds`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          clear_cache: false
        })
      }
    );

    if (!deployResponse.ok) {
      console.log('⚠️  No se pudo triggerar el deploy automáticamente');
      console.log('   Netlify redesplegará en el próximo git push');
    } else {
      console.log('✅ Deploy triggerando en Netlify');
    }

    return true;
  } catch (error) {
    console.error('❌ Error al actualizar Netlify:', error.message);
    return false;
  }
}

async function main() {
  console.log('\n🚀 Generador Automatizado de Códigos de Pago - PageVolt\n');

  // Verificar variables de entorno
  const netlifyToken = process.env.NETLIFY_TOKEN;
  const netlifySiteId = process.env.NETLIFY_SITE_ID;

  if (!netlifyToken || !netlifySiteId) {
    console.log('❌ Error: Faltan credenciales de Netlify\n');
    console.log('Ejecuta primero: npm run setup-local\n');
    rl.close();
    process.exit(1);
  }

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

  // Guardar en archivo local
  const codesPath = path.join(__dirname, '../data/payment-codes.json');
  const codesData = JSON.parse(fs.readFileSync(codesPath, 'utf8'));
  codesData.codes.push(newCode);
  fs.writeFileSync(codesPath, JSON.stringify(codesData, null, 2));
  console.log('✅ Código guardado en data/payment-codes.json');

  // Actualizar Netlify
  const jsonOneLine = JSON.stringify(codesData);
  const netlifyUpdated = await updateNetlifyEnvVar(
    netlifySiteId,
    netlifyToken,
    'PAYMENT_CODES',
    jsonOneLine
  );

  if (!netlifyUpdated) {
    console.log('\n⚠️  No se pudo actualizar Netlify automáticamente.');
    console.log('Deberás actualizar manualmente la variable PAYMENT_CODES.\n');
  }

  // Git commit y push
  console.log('\n📦 Haciendo commit y push a git...');
  try {
    execSync('git add data/payment-codes.json', { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
    execSync(`git commit -m "Nuevo código de pago: ${code} - ${clientName}"`, {
      cwd: path.join(__dirname, '..'),
      stdio: 'inherit'
    });
    execSync('git push', { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
    console.log('✅ Cambios subidos a git');
  } catch (error) {
    console.log('⚠️  Error con git (puede que no haya cambios o no esté configurado)');
  }

  // Mostrar resultado final
  console.log('\n' + '━'.repeat(80));
  console.log('🎉 ¡TODO LISTO!');
  console.log('━'.repeat(80));
  console.log(`\n✅ Código para el cliente: ${code}`);
  console.log(`💰 Cantidad: €${amount.toFixed(2)} (${isFirst ? 'Primer' : 'Segundo'} pago - 50%)`);
  console.log(`📧 Email: ${email}`);
  console.log('\nYa está activo en la web, puedes enviárselo al cliente ahora.');
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
