# 🚀 Sistema Automatizado de Códigos de Pago

## Configuración inicial (solo una vez)

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar credenciales de Netlify
```bash
npm run setup-local
```

Este comando te guiará para obtener:
- **NETLIFY_TOKEN**: Tu token de API de Netlify
- **NETLIFY_SITE_ID**: El ID de tu sitio en Netlify

Las credenciales se guardarán en `.env` (ya está en .gitignore, no se subirá a git)

---

## Uso diario

### Generar nuevo código y desplegar automáticamente

```bash
npm run nuevo-cliente
```

**Este comando hace TODO automáticamente:**

1. ✅ Te pregunta los datos del cliente (nombre, email, precio, tipo de pago)
2. ✅ Genera el código automáticamente
3. ✅ Guarda en `data/payment-codes.json` (registro local)
4. ✅ Actualiza la variable `PAYMENT_CODES` en Netlify vía API
5. ✅ Hace `git add`, `commit` y `push` automáticamente
6. ✅ Te muestra el código para enviar al cliente

**Output del comando:**
```
🚀 Generador Automatizado de Códigos de Pago - PageVolt

Nombre del negocio: Bar El Rincón
Email del cliente: contacto@barelrincon.com
Precio total del proyecto (€): 500
Tipo de pago (1: Primer 50%, 2: Segundo 50%): 1
Descripción (ej: Web Esencial): Web Premium

⚙️  Procesando...

✅ Código guardado en data/payment-codes.json
📡 Actualizando variable de entorno en Netlify...
✅ Variable PAYMENT_CODES actualizada en Netlify
📦 Haciendo commit y push a git...
✅ Cambios subidos a git

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎉 ¡TODO LISTO!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Código para el cliente: PV-BARRIN-X7K2M
💰 Cantidad: €250.00 (Primer pago - 50%)
📧 Email: contacto@barelrincon.com

Ya está activo en la web, puedes enviárselo al cliente ahora.

Mensaje sugerido para Instagram:
────────────────────────────────────────────────────────────────────────────────
¡Hola! 👋

Para procesar el pago de tu web (€250.00):
🔗 https://tudominio.com/pago

Tu código: PV-BARRIN-X7K2M

¡Es 100% seguro con Stripe! 🔒
────────────────────────────────────────────────────────────────────────────────
```

---

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run setup-local` | Configuración inicial de credenciales |
| `npm run nuevo-cliente` | **Genera código y despliega TODO automáticamente** |
| `npm run generate-code` | Solo genera código (sin desplegar, modo manual) |
| `npm run dev` | Servidor de desarrollo local |
| `npm run build` | Build de producción |

---

## Cómo funciona el sistema

### Variables de entorno en Netlify

Los códigos de pago ya NO se leen de archivos en producción. Se almacenan en una variable de entorno:

- **Variable**: `PAYMENT_CODES`
- **Valor**: JSON con todos los códigos
- **Ubicación**: Netlify Dashboard → Site settings → Environment variables

El script `nuevo-cliente` actualiza esta variable automáticamente vía Netlify API.

### Flujo completo

```
1. Ejecutas: npm run nuevo-cliente
2. Introduces datos del cliente
3. Script genera código único
4. Guarda en data/payment-codes.json (local)
5. Actualiza PAYMENT_CODES en Netlify (API)
6. Git commit + push automático
7. Netlify redespliega automáticamente
8. Cliente puede usar el código inmediatamente
```

---

## Archivo .env (local, no se sube a git)

```env
# Stripe
VITE_STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Netlify API
NETLIFY_TOKEN=tu_token_aqui
NETLIFY_SITE_ID=tu_site_id_aqui
```

---

## Solución de problemas

### Error: "Faltan credenciales de Netlify"
→ Ejecuta `npm run setup-local` para configurar

### Error al actualizar Netlify
→ Verifica que tu `NETLIFY_TOKEN` tenga permisos de escritura
→ Verifica que el `NETLIFY_SITE_ID` sea correcto

### Error con git
→ Asegúrate de tener git configurado
→ El script continúa aunque git falle

---

## Ventajas del sistema automatizado

✅ **Sin pasos manuales** - Todo se hace automáticamente
✅ **Sin errores** - No hay que copiar/pegar JSON manualmente
✅ **Rápido** - De 0 a código activo en 30 segundos
✅ **Registro local** - `data/payment-codes.json` como backup
✅ **Git automático** - Commits y push sin pensar
✅ **Mensaje listo** - Te da el texto para Instagram

---

## Notas importantes

1. **Webhook de Stripe**: El webhook NO puede actualizar códigos automáticamente. Cuando un cliente paga, debes actualizar manualmente el estado a "paid" ejecutando `npm run nuevo-cliente` con un código actualizado, o editando directamente la variable `PAYMENT_CODES` en Netlify.

2. **Primer uso**: Ejecuta `npm run setup-local` antes del primer `npm run nuevo-cliente`

3. **Seguridad**: El archivo `.env` nunca se sube a git (está en .gitignore)

---

**¡Listo para generar códigos automáticamente! 🎉**

Ejecuta: `npm run nuevo-cliente`
