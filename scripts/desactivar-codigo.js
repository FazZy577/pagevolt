#!/usr/bin/env node

/**
 * Script para desactivar códigos de pago
 * Uso: npm run desactivar-codigo
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

async function main() {
  console.log('\n🔒 Desactivar Código de Pago - PageVolt\n');

  const codeToDeactivate = await question('Código a desactivar: ');

  if (!codeToDeactivate.trim()) {
    console.log('\n❌ Código no proporcionado\n');
    rl.close();
    process.exit(1);
  }

  // Leer archivo de códigos activos (frontend)
  const activeCodesPath = path.join(__dirname, '../src/data/payment-codes-active.json');
  const activeCodesData = JSON.parse(fs.readFileSync(activeCodesPath, 'utf8'));

  // Buscar el código
  const codeIndex = activeCodesData.codes.findIndex(
    c => c.code === codeToDeactivate.trim().toUpperCase()
  );

  if (codeIndex === -1) {
    console.log('\n❌ Código no encontrado\n');
    rl.close();
    process.exit(1);
  }

  const code = activeCodesData.codes[codeIndex];
  console.log(`\nCódigo encontrado: ${code.code}`);
  console.log(`Cliente: ${code.clientName}`);
  console.log(`Cantidad: €${code.amount}`);

  const confirm = await question('\n¿Desactivar este código? (s/n): ');

  if (confirm.toLowerCase() !== 's') {
    console.log('\n❌ Operación cancelada\n');
    rl.close();
    process.exit(0);
  }

  // Cambiar status a inactive
  activeCodesData.codes[codeIndex].status = 'inactive';
  activeCodesData.codes[codeIndex].deactivatedAt = new Date().toISOString();

  // Guardar cambios
  fs.writeFileSync(activeCodesPath, JSON.stringify(activeCodesData, null, 2));
  console.log('\n✅ Código desactivado en src/data/payment-codes-active.json');

  // También actualizar data/payment-codes.json para mantener sincronizado
  const allCodesPath = path.join(__dirname, '../data/payment-codes.json');
  const allCodesData = JSON.parse(fs.readFileSync(allCodesPath, 'utf8'));

  const allCodesIndex = allCodesData.codes.findIndex(
    c => c.code === codeToDeactivate.trim().toUpperCase()
  );

  if (allCodesIndex !== -1) {
    allCodesData.codes[allCodesIndex].status = 'inactive';
    allCodesData.codes[allCodesIndex].deactivatedAt = new Date().toISOString();
    fs.writeFileSync(allCodesPath, JSON.stringify(allCodesData, null, 2));
    console.log('✅ Código desactivado en data/payment-codes.json');
  }

  // Git commit y push
  console.log('\n📦 Haciendo commit y push a git...');
  try {
    execSync('git add src/data/payment-codes-active.json data/payment-codes.json', {
      cwd: path.join(__dirname, '..'),
      stdio: 'inherit'
    });
    execSync(`git commit -m "Código desactivado: ${code.code} - ${code.clientName}"`, {
      cwd: path.join(__dirname, '..'),
      stdio: 'inherit'
    });
    execSync('git push', { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
    console.log('✅ Cambios subidos a git');
    console.log('🚀 El código estará desactivado después del próximo deploy');
  } catch (error) {
    console.log('⚠️  Error con git:', error.message);
  }

  console.log('\n' + '━'.repeat(80));
  console.log('✅ Código desactivado correctamente');
  console.log('━'.repeat(80));
  console.log(`\nCódigo: ${code.code}`);
  console.log('El código ya no podrá ser usado para pagos.\n');

  rl.close();
}

main().catch(error => {
  console.error('❌ Error:', error);
  rl.close();
  process.exit(1);
});
