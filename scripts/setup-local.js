#!/usr/bin/env node

/**
 * Script de configuración inicial para Voltix
 * Configura las variables de entorno necesarias para el deploy automatizado
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

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
  console.log('\n🔧 Configuración inicial de Voltix\n');
  console.log('Este script te ayudará a configurar las credenciales de Netlify\n');

  console.log('━'.repeat(80));
  console.log('📖 PASO 1: Obtener tu Personal Access Token de Netlify');
  console.log('━'.repeat(80));
  console.log('\n1. Ve a: https://app.netlify.com/user/applications#personal-access-tokens');
  console.log('2. Haz clic en "New access token"');
  console.log('3. Dale un nombre (ej: "Voltix Deploy")');
  console.log('4. Copia el token que se genera\n');

  const netlifyToken = await question('Pega aquí tu NETLIFY_TOKEN: ');

  console.log('\n━'.repeat(80));
  console.log('📖 PASO 2: Obtener tu Site ID');
  console.log('━'.repeat(80));
  console.log('\n1. Ve a tu dashboard de Netlify');
  console.log('2. Selecciona tu sitio Voltix');
  console.log('3. Ve a Site settings → General');
  console.log('4. Busca "Site information" → "Site ID"');
  console.log('5. Copia el ID (tiene formato: 12345678-abcd-1234-abcd-123456789abc)\n');

  const netlifySiteId = await question('Pega aquí tu NETLIFY_SITE_ID: ');

  // Crear archivo .env
  const envPath = path.join(__dirname, '../.env');
  const envContent = `# Variables de entorno para Voltix
# Generado el ${new Date().toISOString()}

# Stripe - Obtener de https://dashboard.stripe.com/apikeys
VITE_STRIPE_PUBLIC_KEY=pk_test_tu_clave_publica_aqui
STRIPE_SECRET_KEY=sk_test_tu_clave_secreta_aqui
STRIPE_WEBHOOK_SECRET=whsec_tu_webhook_secret_aqui

# Netlify API - Para deploy automatizado
NETLIFY_TOKEN=${netlifyToken}
NETLIFY_SITE_ID=${netlifySiteId}
`;

  fs.writeFileSync(envPath, envContent);

  console.log('\n✅ Configuración guardada en .env\n');
  console.log('━'.repeat(80));
  console.log('🎉 ¡Todo listo!');
  console.log('━'.repeat(80));
  console.log('\nAhora puedes usar:');
  console.log('  npm run nuevo-cliente    → Genera un código y despliega automáticamente');
  console.log('  npm run generate-code    → Solo genera un código (sin desplegar)\n');
  console.log('⚠️  Recuerda: No subas el archivo .env a git (ya está en .gitignore)\n');

  rl.close();
}

main().catch(console.error);
