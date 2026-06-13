## 🔄 FLUJO COMPLETO DE PAGO

### Vista del Cliente

```
┌─────────────────────────────────────────────────────────────┐
│  1. Cliente ve tu Instagram y te contacta                  │
│     "Hola, quiero una web para mi café"                    │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  2. Tú explicas el servicio y precio                        │
│     "Web Esencial por €99 - 50% ahora, 50% al final"      │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  3. Generas código de pago (tú)                            │
│     npm run generate-code                                   │
│     → Código: PV-CAFE1-AB3X9                              │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  4. Envías código al cliente                               │
│     "Ve a pagevolt.com/pago y usa: PV-CAFE1-AB3X9"        │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  5. Cliente entra a tu web → /pago                         │
│     ┌─────────────────────────────────────┐                │
│     │  PageVolt                           │                │
│     │                                     │                │
│     │  Procesar pago                      │                │
│     │  Introduce el código único que has  │                │
│     │  recibido                            │                │
│     │                                     │                │
│     │  Código de pago                     │                │
│     │  ┌─────────────────────────────┐   │                │
│     │  │ PV-CAFE1-AB3X9              │   │                │
│     │  └─────────────────────────────┘   │                │
│     │                                     │                │
│     │  [Continuar al pago]                │                │
│     └─────────────────────────────────────┘                │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  6. Sistema valida el código                               │
│     Backend verifica: ¿existe? ¿está pending?             │
│     → Muestra precio: €49.50 (Primer pago 50%)            │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  7. Cliente introduce datos de tarjeta                      │
│     ┌─────────────────────────────────────┐                │
│     │  Completar pago                     │                │
│     │                                     │                │
│     │  Cliente: Café Madrid               │                │
│     │  Tipo de pago: Primer pago (50%)    │                │
│     │  Total a pagar: €49.50              │                │
│     │                                     │                │
│     │  ┌─────────────────────────────┐   │                │
│     │  │ 💳 Número de tarjeta        │   │                │
│     │  │ 📅 MM/AA   🔒 CVV           │   │                │
│     │  └─────────────────────────────┘   │                │
│     │                                     │                │
│     │  [Pagar €49.50]                     │                │
│     │                                     │                │
│     │  🔒 Pago seguro encriptado con      │                │
│     │     Stripe                          │                │
│     └─────────────────────────────────────┘                │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  8. Stripe procesa el pago                                 │
│     ✓ Tarjeta validada                                     │
│     ✓ Cargo realizado                                      │
│     ✓ Webhook notifica a tu sistema                        │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  9. Confirmación automática                                │
│     ┌─────────────────────────────────────┐                │
│     │  ✓ ¡Pago completado!                │                │
│     │                                     │                │
│     │  Tu pago se ha procesado            │                │
│     │  correctamente                      │                │
│     │                                     │                │
│     │  ¿Qué sigue?                        │                │
│     │  📧 Recibirás email confirmación   │                │
│     │  🚀 Comenzaremos tu proyecto       │                │
│     │  💬 Te contactaremos por Instagram │                │
│     └─────────────────────────────────────┘                │
│                                                             │
│     → Cliente recibe email de Stripe con recibo            │
│     → Código marcado como "paid" en tu sistema             │
│     → Dinero en tu cuenta Stripe                          │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  10. TÚ desarrollas la web                                 │
│      - Creas la web del cliente                            │
│      - Subes a dominio temporal                            │
│      - Envías link de preview                              │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  11. Cliente aprueba la web                                │
│      "Me gusta, está perfecta"                             │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  12. Segundo pago (50% restante)                           │
│      npm run generate-code                                  │
│      → Código: PV-CAFE1-XY9Z2                             │
│      Cliente paga el resto igual que antes                 │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  13. ¡Proyecto completado!                                 │
│      - Entregas web definitiva                             │
│      - Cliente feliz ✅                                     │
│      - Tú has cobrado 100% de forma segura ✅              │
└─────────────────────────────────────────────────────────────┘
```

### Vista Técnica

```
Usuario                  Tu Web              Backend           Stripe
  │                        │                   │                │
  │──(1) Introduce código──▶                   │                │
  │                        │                   │                │
  │                        │──(2) POST /validate-code──▶        │
  │                        │                   │                │
  │                        │                   │──(3) Crea PaymentIntent──▶
  │                        │                   │                │
  │                        │                   │◀─(4) clientSecret────│
  │                        │                   │                │
  │                        │◀─(5) clientSecret + datos─────────│
  │                        │                   │                │
  │◀─(6) Muestra formulario─                   │                │
  │                        │                   │                │
  │──(7) Introduce tarjeta─▶                   │                │
  │                        │                   │                │
  │                        │──────(8) Confirma pago─────────────▶
  │                        │                   │                │
  │                        │◀──────(9) Pago exitoso─────────────│
  │                        │                   │                │
  │                        │                   │◀─(10) Webhook (payment_intent.succeeded)───│
  │                        │                   │                │
  │                        │                   │──(11) Marca código "paid"
  │                        │                   │                │
  │◀─(12) Página confirmación                  │                │
  │                        │                   │                │
  │◀────────────────(13) Email recibo──────────────────────────│
```

## 💡 Ventajas de este Sistema

### Para el Cliente
✅ **No necesita crear cuenta** - Solo introduce el código
✅ **Pago seguro** - Procesado por Stripe (mismo que Amazon, Shopify)
✅ **Todas las tarjetas** - Visa, Mastercard, Amex, etc.
✅ **Recibo automático** - Email confirmación al instante
✅ **Transparente** - Ve exactamente qué está pagando

### Para Ti
✅ **Sin intermediarios** - Dinero directo a tu cuenta Stripe
✅ **Profesional** - No más "hazme Bizum" 
✅ **Escalable** - Puedes manejar 100 clientes igual que 1
✅ **Automatizado** - No tienes que confirmar pagos manualmente
✅ **Trazable** - Todo queda registrado
✅ **Legal** - Facturas automáticas de Stripe

## 🎯 Casos de Uso

### Caso 1: Web Básica €99
```
Primer pago:  €49.50 (código: PV-CAFE1-FIRST)
Segundo pago: €49.50 (código: PV-CAFE1-SECOND)
```

### Caso 2: Web + Reservas €249
```
Primer pago:  €124.50 (código: PV-BAR23-FIRST)
Segundo pago: €124.50 (código: PV-BAR23-SECOND)
```

### Caso 3: Rediseño €149
```
Primer pago:  €74.50 (código: PV-REST5-FIRST)
Segundo pago: €74.50 (código: PV-REST5-SECOND)
```

## ⚡ Tips Pro

1. **Genera el código al momento** - Cuando el cliente dice "sí"
2. **Envía el código por Instagram** - Donde ya está la conversación
3. **Explica el proceso** - "Es como comprar en Amazon, pero con código"
4. **Marca deadline** - "Código válido 48h"
5. **Celebra el pago** - Agradece y da siguiente paso
