# Sistema de Pagos PageVolt

## 🚀 Configuración completa

Tu sistema de pagos está listo. Aquí está todo lo que necesitas hacer:

## 1. Configurar Stripe

### Crear cuenta en Stripe
1. Ve a https://stripe.com y crea una cuenta
2. Activa tu cuenta (necesitarás datos fiscales)
3. Ve a https://dashboard.stripe.com/apikeys

### Obtener las claves
- **Clave pública** (empieza con `pk_live_` o `pk_test_`)
- **Clave secreta** (empieza con `sk_live_` o `sk_test_`)

### Configurar webhook
1. Ve a https://dashboard.stripe.com/webhooks
2. Clic en "Add endpoint"
3. URL del endpoint: `https://tu-sitio.netlify.app/.netlify/functions/stripe-webhook`
4. Eventos a escuchar: selecciona `payment_intent.succeeded`
5. Copia el "Signing secret" (empieza con `whsec_`)

## 2. Configurar variables de entorno

### En Netlify (IMPORTANTE)
1. Ve a tu sitio en Netlify
2. Site settings → Environment variables
3. Añade estas 3 variables:

```
VITE_STRIPE_PUBLIC_KEY=pk_live_tu_clave_aqui
STRIPE_SECRET_KEY=sk_live_tu_clave_aqui
STRIPE_WEBHOOK_SECRET=whsec_tu_secret_aqui
```

### En local (opcional, para desarrollo)
Crea un archivo `.env` en la raíz:

```
VITE_STRIPE_PUBLIC_KEY=pk_test_tu_clave_aqui
STRIPE_SECRET_KEY=sk_test_tu_clave_aqui
STRIPE_WEBHOOK_SECRET=whsec_tu_secret_aqui
```

## 3. Cómo funciona el flujo

### Paso 1: Cliente te contacta por Instagram
- Le explicas el servicio y el precio
- Ejemplo: Web Esencial por €99

### Paso 2: Crear código de pago
Edita el archivo `data/payment-codes.json` y añade:

```json
{
  "code": "PV-CAFE1-FIRST",
  "clientName": "Café Madrid",
  "amount": 49.50,
  "paymentType": "Primer pago (50%)",
  "totalProject": 99,
  "status": "pending",
  "createdAt": "2026-06-13T19:22:00.615Z",
  "description": "Web Esencial - Café Madrid",
  "email": "contacto@cafemadrid.com"
}
```

### Paso 3: Enviar código al cliente
Le dices al cliente:
> "Para procesar el primer pago del 50%, ve a https://pagevolt.netlify.app/pago y usa el código: **PV-CAFE1-FIRST**"

### Paso 4: Cliente paga
1. El cliente entra a tu web en `/pago`
2. Introduce el código
3. Ve el precio a pagar (€49.50)
4. Paga con su tarjeta
5. Recibe confirmación y recibo por email

### Paso 5: Haces la web
- Stripe te notifica del pago
- El código se marca como "paid" automáticamente
- Desarrollas la web y le envías preview

### Paso 6: Segundo pago
Cuando apruebe la web, creas otro código:

```json
{
  "code": "PV-CAFE1-SECOND",
  "clientName": "Café Madrid",
  "amount": 49.50,
  "paymentType": "Segundo pago (50%)",
  "totalProject": 99,
  "status": "pending",
  "createdAt": "2026-06-13T20:00:00.000Z",
  "description": "Web Esencial - Café Madrid (Final)",
  "email": "contacto@cafemadrid.com"
}
```

## 4. Estructura de archivos

```
pagevolt/
├── src/
│   └── components/
│       ├── Payment.jsx          # Página de pago
│       └── Payment.css          # Estilos (diseño coherente)
├── netlify/
│   └── functions/
│       ├── validate-code.js     # Valida código y crea PaymentIntent
│       └── stripe-webhook.js    # Confirma pago y actualiza estado
├── data/
│   ├── payment-codes.json       # TUS CÓDIGOS DE PAGO
│   └── README.md                # Instrucciones
└── .env.example                 # Plantilla de variables
```

## 5. Desplegar en Netlify

```bash
cd pagevolt
npm run build
```

Luego sube a Netlify o conecta el repo con GitHub.

## 6. Formato de códigos recomendado

```
PV-[NOMBRE]-[TIPO]

Ejemplos:
- PV-CAFE1-FIRST  (Primer pago Café #1)
- PV-CAFE1-SECOND (Segundo pago Café #1)
- PV-BAR23-FIRST  (Primer pago Bar #23)
```

## 7. Estados de los códigos

- **pending**: Cliente aún no ha pagado
- **paid**: Pago completado ✓
- **cancelled**: Proyecto cancelado

## 8. Seguridad

✓ Pagos procesados por Stripe (certificado PCI)
✓ Datos de tarjeta nunca tocan tu servidor
✓ Webhook firmado para evitar fraude
✓ Códigos únicos no reutilizables
✓ Encriptación SSL/TLS

## 9. Comisiones de Stripe

Stripe cobra por transacción:
- **1.5% + €0.25** por tarjetas europeas
- **2.9% + €0.25** por tarjetas internacionales

Ejemplo con €99:
- Cliente paga: €99
- Stripe se queda: ~€1.74
- Tú recibes: ~€97.26

## 10. Próximos pasos

1. ☐ Crear cuenta Stripe
2. ☐ Configurar webhook
3. ☐ Añadir variables de entorno en Netlify
4. ☐ Hacer build y deploy
5. ☐ Probar con código demo
6. ☐ ¡Listo para vender!

## 📧 Soporte

Si tienes dudas con Stripe: https://support.stripe.com/
Documentación: https://stripe.com/docs
