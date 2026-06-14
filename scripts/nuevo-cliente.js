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

  // Actualizar netlify/functions/codes-data.js
  const codesDataJsPath = path.join(__dirname, '../netlify/functions/codes-data.js');
  const codesDataJsContent = `// Códigos de pago para PageVolt
// Este archivo se actualiza automáticamente con npm run nuevo-cliente
// No editar manualmente

export const codesData = ${JSON.stringify(codesData, null, 2)};
`;
  fs.writeFileSync(codesDataJsPath, codesDataJsContent);
  console.log('✅ Códigos actualizados en netlify/functions/codes-data.js');

  // Git commit y push
  console.log('\n📦 Haciendo commit y push a git...');
  try {
    execSync('git add data/payment-codes.json netlify/functions/codes-data.js', {
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
