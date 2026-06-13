# 📋 Quick Reference - Daily Workflow

## Generate Payment Code

```bash
npm run generate-code
```

Fill in:
- Business name
- Client email  
- Total project price (€)
- Payment type (1 = first 50%, 2 = second 50%)
- Description

You'll get a code like: `PV-BARRIN-A3F9K`

---

## Message Template (Instagram)

```
¡Hola! 👋

Para procesar el pago de tu web:
🔗 https://tudominio.com/pago

Tu código: PV-XXXXX-XXXXX

Es 100% seguro con Stripe 🔒
¡Cualquier duda me dices!
```

---

## Check Payments

**Admin Dashboard:** `https://tudominio.com/admin`  
**Password:** `pagevolt2026` ⚠️ (change in production)

---

## Netlify Environment Variables

Add these in: **Site settings → Environment variables**

```
VITE_STRIPE_PUBLIC_KEY = pk_test_... or pk_live_...
STRIPE_SECRET_KEY = sk_test_... or sk_live_...
STRIPE_WEBHOOK_SECRET = whsec_...
```

**Important:** Redeploy after adding/changing env vars!

---

## Test Cards (Stripe Test Mode)

| Card Number | Result |
|------------|--------|
| `4242 4242 4242 4242` | ✅ Success |
| `4000 0000 0000 0002` | ❌ Declined |

Use any future expiry date and any 3-digit CVC.

---

## URLs

| Page | URL |
|------|-----|
| Payment | `/pago` |
| Admin | `/admin` |
| Success | `/pago/confirmacion` |

---

## Files You'll Use

```
data/payment-codes.json    # All payment codes (auto-updated)
scripts/generate-code.js   # Code generator
src/components/Admin.jsx   # Change admin password here (line 13)
```

---

## Quick Troubleshooting

**Payment fails?**
- Check Netlify Functions logs
- Verify env vars are set
- Make sure you redeployed

**Webhook not working?**
- Check Stripe Dashboard → Webhooks → Attempts
- Verify webhook secret is correct

**Admin can't see codes?**
- Check `/data/payment-codes.json` exists
- Verify it's publicly accessible

---

## Go Live Checklist

- [ ] Get live Stripe keys (`pk_live_` / `sk_live_`)
- [ ] Update env vars in Netlify
- [ ] Update webhook to live mode
- [ ] Change admin password
- [ ] Test with real €0.50 payment
- [ ] Refund test payment
- [ ] You're live! 🚀
