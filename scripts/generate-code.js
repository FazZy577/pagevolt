#!/usr/bin/env node

/**
 * Script para generar códigos de pago para PageVolt
 * Uso: node scripts/generate-code.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

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
  console.log('\n🚀 Generador de Códigos de Pago - PageVolt\n');

  const clientName = await question('Nombre del negocio: ');
  const email = await question('Email del cliente: ');
  const priceInput = await question('Precio total del proyecto (€): ');
  const price = parseFloat(priceInput);

  const paymentType = await question('Tipo de pago (1: Primer 50%, 2: Segundo 50%): ');
  const isFirst = paymentType === '1';

  const description = await question('Descripción (ej: Web Esencial): ');

  const code = generateCode(clientName);
  const amount = (price / 2).toFixed(2);

  const newCode = {
    code: code,
    clientName: clientName,
    amount: parseFloat(amount),
    paymentType: isFirst ? 'Primer pago (50%)' : 'Segundo pago (50%)',
    totalProject: price,
    status: 'pending',
    createdAt: new Date().toISOString(),
    description: `${description} - ${clientName}`,
    email: email
  };

  console.log('\n✓ Código generado:\n');
  console.log(JSON.stringify(newCode, null, 2));

  const save = await question('\n¿Guardar en payment-codes.json? (s/n): ');

  if (save.toLowerCase() === 's') {
    const codesPath = path.join(__dirname, '../data/payment-codes.json');
    const codesData = JSON.parse(fs.readFileSync(codesPath, 'utf8'));

    codesData.codes.push(newCode);

    fs.writeFileSync(codesPath, JSON.stringify(codesData, null, 2));
    console.log('\n✓ Código guardado correctamente');
    console.log(`\n📋 Envía este código al cliente: ${code}\n`);
  }

  rl.close();
}

main().catch(console.error);
