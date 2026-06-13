# 🚀 PageVolt Payment System - Setup Guide

Your payment system is **fully built and ready to deploy**! This guide will walk you through the final setup steps.

---

## 📋 What's Already Built

✅ **Payment page** at `/pago` with code validation  
✅ **Stripe integration** with PaymentIntent API  
✅ **Netlify Functions** for secure server-side processing  
✅ **Webhook handler** to auto-update payment status  
✅ **Admin dashboard** at `/admin` to track all payments  
✅ **Code generator script** to create payment codes  
✅ **Success page** with payment confirmation  

---

## 🔧 Setup Steps

### 1. Create a Stripe Account

1. Go to https://dashboard.stripe.com/register
2. Complete the signup process
3. Activate your account (you'll need to verify your business)

### 2. Get Your Stripe API Keys

1. Go to https://dashboard.stripe.com/apikeys
2. Copy these keys:
   - **Publishable key** (starts with `pk_test_` or `pk_live_`)
   - **Secret key** (starts with `sk_test_` or `sk_live_`)

**⚠️ IMPORTANT:** Start with **test mode** keys (`pk_test_` / `sk_test_`) until you're ready to accept real payments.

### 3. Set Up Environment Variables in Netlify

1. Deploy your site to Netlify:
   ```bash
   npm run build
   # Connect to Netlify and deploy
   ```

2. Go to your Netlify dashboard → **Site settings** → **Environment variables**

3. Add these variables:

   | Variable Name | Value | Example |
   |--------------|-------|---------|
   | `VITE_STRIPE_PUBLIC_KEY` | Your Stripe publishable key | `pk_test_51Abc...` |
   | `STRIPE_SECRET_KEY` | Your Stripe secret key | `sk_test_51Abc...` |
   | `STRIPE_WEBHOOK_SECRET` | Your webhook secret (step 4) | `whsec_...` |

4. **Redeploy** your site after adding environment variables

### 4. Set Up Stripe Webhook

This automatically marks payments as "paid" in your system.

1. Go to https://dashboard.stripe.com/webhooks
2. Click **"Add endpoint"**
3. Enter your webhook URL:
   ```
   https://your-site.netlify.app/.netlify/functions/stripe-webhook
   ```
4. Select events to listen to:
   - ✅ `payment_intent.succeeded`
   - ✅ `payment_intent.payment_failed`
5. Click **"Add endpoint"**
6. Copy the **Signing secret** (starts with `whsec_`)
7. Add it to Netlify as `STRIPE_WEBHOOK_SECRET`
8. **Redeploy** your site

---

## 💳 How to Use

### Creating a Payment Code

1. Open your terminal in the project folder:
   ```bash
   npm run generate-code
   ```

2. Fill in the details:
   ```
   Nombre del negocio: Bar El Rincón
   Email del cliente: cliente@email.com
   Precio total del proyecto (€): 500
   Tipo de pago (1: Primer 50%, 2: Segundo 50%): 1
   Descripción (ej: Web Esencial): Web Premium
   ```

3. You'll get a code like: `PV-BARRIN-A3F9K`

4. Save it (type `s` when prompted)

### Sending the Code to Client

Send them a message via Instagram:

```
¡Hola! 👋

Para procesar el primer pago de tu web, accede a:
https://tudominio.com/pago

Tu código de pago es: PV-BARRIN-A3F9K

Es 100% seguro, procesado por Stripe (el mismo sistema que usa Amazon y Shopify).

¡Cualquier duda me dices!
```

### Client Payment Flow

1. Client goes to `tudominio.com/pago`
2. Enters the code you sent them
3. Sees their payment details (name, amount, description)
4. Pays with card, Apple Pay, or Google Pay
5. Gets instant confirmation + email receipt

### Checking Payments (Admin Dashboard)

1. Go to `tudominio.com/admin`
2. Login password: `pagevolt2026` (⚠️ **change this in production!**)
3. See all payments:
   - ⏳ Pending
   - ✅ Paid
   - ❌ Cancelled
4. Track total revenue

---

## 🔒 Security Notes

### Change Admin Password

Edit `src/components/Admin.jsx` line 13:

```javascript
const ADMIN_PASSWORD = 'your-secure-password-here';
```

### Production Checklist

Before going live with real payments:

- [ ] Replace test Stripe keys with **live keys** (`pk_live_` / `sk_live_`)
- [ ] Update webhook endpoint to use live mode
- [ ] Change admin password
- [ ] Test the full flow with a real card
- [ ] Verify webhook is working (check Netlify Functions logs)

---

## 🎨 Pages Overview

| URL | Purpose |
|-----|---------|
| `/pago` | Payment page where clients enter their code |
| `/pago/confirmacion` | Success page after payment |
| `/admin` | Admin dashboard to track payments |

---

## 📂 File Structure

```
pagevolt/
├── src/
│   ├── components/
│   │   ├── Payment.jsx          # Main payment page
│   │   ├── PaymentSuccess.jsx   # Success confirmation
│   │   └── Admin.jsx            # Admin dashboard
├── netlify/functions/
│   ├── validate-code.js         # Code validation + create PaymentIntent
│   ├── verify-payment.js        # Verify payment status
│   └── stripe-webhook.js        # Auto-update payment status
├── data/
│   └── payment-codes.json       # Payment codes database
└── scripts/
    └── generate-code.js         # Generate new codes
```

---

## 🐛 Troubleshooting

### Payment not working

1. Check Netlify Functions logs: **Site → Functions → View logs**
2. Verify environment variables are set correctly
3. Make sure you redeployed after adding env vars

### Webhook not updating status

1. Go to Stripe Dashboard → **Webhooks**
2. Click on your webhook
3. Check the **"Webhook attempts"** log for errors
4. Verify the webhook secret is correct in Netlify

### Admin page not loading data

1. Make sure `data/payment-codes.json` is deployed
2. Check browser console for errors
3. Verify the file is accessible at `/data/payment-codes.json`

---

## 💡 Tips

1. **Test mode is free** - Use test cards to verify everything works:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`
   - Full list: https://stripe.com/docs/testing

2. **Email receipts** - Stripe automatically sends receipts to the client's email

3. **Mobile-friendly** - The entire system works perfectly on mobile devices

4. **PCI compliant** - Card data never touches your server (handled by Stripe)

---

## 🚀 Going Live

1. Switch to Stripe **live mode**
2. Update environment variables with live keys
3. Update webhook to live endpoint
4. Test with a real €0.50 payment
5. Refund the test payment
6. You're live! 🎉

---

## 📧 Support

If you have issues:
- Check Stripe documentation: https://stripe.com/docs
- Check Netlify Functions docs: https://docs.netlify.com/functions/overview/
- Test with Stripe test cards first

---

**Built with ❤️ for PageVolt**
