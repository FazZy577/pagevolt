# ⚡ INICIO RÁPIDO - Sistema de Pagos PageVolt

## ✅ Checklist de Setup (15 minutos)

### 1️⃣ Configurar Stripe (5 min)
- [ ] Crear cuenta en https://stripe.com
- [ ] Ir a https://dashboard.stripe.com/apikeys
- [ ] Copiar clave pública (`pk_live_...`)
- [ ] Copiar clave secreta (`sk_live_...`)

### 2️⃣ Configurar Webhook (3 min)
- [ ] Ir a https://dashboard.stripe.com/webhooks
- [ ] Añadir endpoint: `https://TU-SITIO.netlify.app/.netlify/functions/stripe-webhook`
- [ ] Seleccionar evento: `payment_intent.succeeded`
- [ ] Copiar webhook secret (`whsec_...`)

### 3️⃣ Deploy en Netlify (5 min)
- [ ] Conectar repo en https://netlify.com
- [ ] Ir a Site settings → Environment variables
- [ ] Añadir las 3 variables:
  ```
  VITE_STRIPE_PUBLIC_KEY=pk_live_tu_clave
  STRIPE_SECRET_KEY=sk_live_tu_clave
  STRIPE_WEBHOOK_SECRET=whsec_tu_secret
  ```
- [ ] Deploy automático

### 4️⃣ Primer Cliente (2 min)
```bash
npm run generate-code
```
Sigue las instrucciones y envía el código al cliente.

---

## 🚀 Uso Diario

### Cuando llegue un cliente:

```bash
# 1. Generar código
npm run generate-code

# Te preguntará:
# - Nombre del negocio: Café Madrid
# - Email: contacto@cafemadrid.com
# - Precio total: 99
# - Tipo: 1 (primer 50%)
# - Descripción: Web Esencial

# 2. Te da el código: PV-CAFE1-AB3X9

# 3. Envías al cliente:
"Hola! Para hacer el primer pago (€49.50), 
ve a pagevolt.com/pago y usa el código: 
PV-CAFE1-AB3X9"
```

### Cuando cliente apruebe la web:

```bash
# Generar segundo código
npm run generate-code

# Mismo proceso pero:
# - Tipo: 2 (segundo 50%)
```

---

## 📱 Mensaje para Cliente (Copia y Pega)

```
Hola! 👋

Para procesar el primer pago de tu web (€XX.XX):

1. Entra a: pagevolt.com/pago
2. Introduce el código: PV-XXXXX-XXXXX
3. Paga con tu tarjeta

Es 100% seguro, procesado por Stripe 
(la misma plataforma que usa Amazon).

Recibirás un recibo por email.

¿Alguna duda? 💬
```

---

## 🔍 Verificar que Todo Funciona

### Test en producción:
1. Ve a `tu-sitio.netlify.app/pago`
2. Introduce el código demo: `PV-DEMO-12345`
3. Debería mostrarte €49.50

### Si algo falla:
- Revisa variables de entorno en Netlify
- Mira logs en Netlify → Functions
- Verifica webhook en Stripe dashboard

---

## 💰 ¿Cuándo llega el dinero?

- **Pago instantáneo**: Cliente paga → Confirmación inmediata
- **Llega a tu cuenta**: 2-7 días hábiles (estándar Stripe)
- **Comisión Stripe**: ~1.5% + €0.25

Ejemplo:
- Cliente paga: €99
- Stripe cobra: ~€1.74
- Recibes: ~€97.26

---

## 🆘 Soporte Rápido

### Cliente no puede pagar
1. ¿Código correcto? (distingue mayúsculas)
2. ¿Código ya usado? (mira en `data/payment-codes.json`)
3. ¿Variables de entorno configuradas en Netlify?

### No recibo notificación de pago
1. Ve a Stripe Dashboard → Events
2. Verifica que el webhook se envió
3. Mira logs en Netlify Functions

---

## 📊 Ver Todos tus Pagos

https://dashboard.stripe.com/payments

Ahí ves:
- Todos los pagos recibidos
- Estado de cada pago
- Cliente que pagó
- Recibos generados

---

## 🎯 Archivos Importantes

```
data/payment-codes.json    ← Aquí editas códigos manualmente
scripts/generate-code.js   ← Script para generar códigos
SETUP-PAGOS.md            ← Guía completa
FLUJO-VISUAL.md           ← Flujo ilustrado
```

---

## ✨ Tips Pro

1. **Genera códigos al momento** - No esperes días
2. **Deadline de 48h** - "Código válido 48 horas"
3. **Automatiza mensaje** - Guarda el template
4. **Celebra pagos** - Agradece y da siguiente paso
5. **Revisa Stripe diario** - Para confirmar pagos

---

¡Listo! Ya puedes empezar a cobrar de forma profesional. 🚀
