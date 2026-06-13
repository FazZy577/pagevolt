# 🏗️ PageVolt Payment System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         YOUR WORKFLOW                            │
└─────────────────────────────────────────────────────────────────┘

    1. Contact Client (Instagram)
              ↓
    2. Agree on Price & Scope
              ↓
    3. Generate Code: `npm run generate-code`
              ↓
    4. Send Code via Instagram DM
              ↓
    5. Client Pays Online
              ↓
    6. Check Admin Dashboard
              ↓
    7. Start Building Website!


┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT WORKFLOW                           │
└─────────────────────────────────────────────────────────────────┘

    1. Receive Code from You
              ↓
    2. Go to: tudominio.com/pago
              ↓
    3. Enter Code: PV-XXXXX-XXXXX
              ↓
    4. See Payment Details
              ↓
    5. Pay with Card/Apple Pay/Google Pay
              ↓
    6. Receive Confirmation + Email Receipt


┌─────────────────────────────────────────────────────────────────┐
│                     TECHNICAL ARCHITECTURE                       │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┐
│    Client    │
│   Browser    │
└──────┬───────┘
       │
       │ 1. Opens /pago
       │ 2. Enters code
       ↓
┌──────────────────────────┐
│   Payment Page (React)    │
│   /src/components/       │
│   Payment.jsx            │
└──────────┬───────────────┘
           │
           │ 3. Validates code
           ↓
┌────────────────────────────────┐
│   Netlify Function              │
│   validate-code.js              │
│   • Reads payment-codes.json   │
│   • Creates Stripe PaymentIntent│
└──────────┬─────────────────────┘
           │
           │ 4. Returns clientSecret
           ↓
┌──────────────────────────┐
│   Stripe Payment Element  │
│   (Stripe.js SDK)        │
│   • Card input           │
│   • Apple/Google Pay     │
└──────────┬───────────────┘
           │
           │ 5. Processes payment
           ↓
┌────────────────────────────────┐
│   Stripe Servers                │
│   • Validates card              │
│   • Processes payment           │
│   • Sends webhook               │
└──────────┬─────────────────────┘
           │
           │ 6. payment_intent.succeeded
           ↓
┌────────────────────────────────┐
│   Netlify Function              │
│   stripe-webhook.js             │
│   • Verifies webhook signature │
│   • Updates payment status     │
│   • Marks as "paid"            │
└──────────┬─────────────────────┘
           │
           │ 7. Updates JSON
           ↓
┌────────────────────────────────┐
│   data/payment-codes.json       │
│   {                             │
│     "status": "paid",          │
│     "paidAt": "2026-06-13...", │
│     "stripePaymentId": "pi_..."│
│   }                             │
└────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────┐
│                      FILE STRUCTURE                              │
└─────────────────────────────────────────────────────────────────┘

pagevolt/
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Payment.jsx ................... Main payment page
│   │   ├── Payment.css ................... Styling
│   │   ├── PaymentSuccess.jsx ............ Confirmation page
│   │   ├── PaymentSuccess.css ............ Styling
│   │   ├── Admin.jsx ..................... Admin dashboard
│   │   └── Admin.css ..................... Styling
│   │
│   ├── App.jsx ........................... Routes (/pago, /admin)
│   └── 📁 styles/
│
├── 📁 netlify/functions/
│   ├── validate-code.js ................. Code validation
│   ├── verify-payment.js ................ Payment verification
│   └── stripe-webhook.js ................ Auto-update status
│
├── 📁 data/
│   └── payment-codes.json ............... Payment codes database
│
├── 📁 scripts/
│   └── generate-code.js ................. Code generator CLI
│
├── 📄 SETUP.md .......................... Full setup guide
├── 📄 WORKFLOW.md ....................... Complete workflow
├── 📄 QUICK-REFERENCE.md ................ Daily use reference
└── 📄 .env.example ...................... Environment variables template


┌─────────────────────────────────────────────────────────────────┐
│                    ENVIRONMENT VARIABLES                         │
└─────────────────────────────────────────────────────────────────┘

Local (.env):
├── VITE_STRIPE_PUBLIC_KEY ........... Frontend (public)
│
Netlify (Site Settings → Env Vars):
├── VITE_STRIPE_PUBLIC_KEY ........... Frontend (public)
├── STRIPE_SECRET_KEY ................ Backend (secret)
└── STRIPE_WEBHOOK_SECRET ............ Webhook validation (secret)


┌─────────────────────────────────────────────────────────────────┐
│                      DATA FLOW                                   │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────┐
│ Code Generation  │  npm run generate-code
└────────┬─────────┘
         │
         ↓
┌──────────────────────────────┐
│ payment-codes.json           │
│ {                            │
│   "code": "PV-XXX-XXX",     │
│   "amount": 300,            │
│   "status": "pending"       │
│ }                            │
└────────┬─────────────────────┘
         │
         │ Client enters code
         ↓
┌──────────────────────────────┐
│ validate-code.js             │
│ • Reads JSON                 │
│ • Validates code             │
│ • Creates PaymentIntent      │
└────────┬─────────────────────┘
         │
         │ Returns clientSecret
         ↓
┌──────────────────────────────┐
│ Stripe Payment Element       │
│ • Client pays                │
└────────┬─────────────────────┘
         │
         │ Payment succeeds
         ↓
┌──────────────────────────────┐
│ Stripe Webhook               │
│ • Sends event to webhook     │
└────────┬─────────────────────┘
         │
         ↓
┌──────────────────────────────┐
│ stripe-webhook.js            │
│ • Verifies signature         │
│ • Updates JSON status        │
└────────┬─────────────────────┘
         │
         ↓
┌──────────────────────────────┐
│ payment-codes.json           │
│ {                            │
│   "status": "paid",         │
│   "paidAt": "2026-06-13"    │
│ }                            │
└──────────────────────────────┘


┌─────────────────────────────────────────────────────────────────┐
│                    SECURITY LAYERS                               │
└─────────────────────────────────────────────────────────────────┘

Layer 1: Client Side
├── HTTPS/SSL encryption
├── Stripe.js (PCI compliant)
└── No card data stored locally

Layer 2: Server Side
├── Netlify Functions (serverless)
├── Environment variables (secrets)
└── Webhook signature verification

Layer 3: Stripe
├── PCI DSS Level 1 certified
├── Fraud detection
├── 3D Secure authentication
└── Bank-level encryption

Layer 4: Payment Codes
├── One-time use codes
├── Status validation (pending/paid/cancelled)
└── Unique code generation


┌─────────────────────────────────────────────────────────────────┐
│                     KEY CONCEPTS                                 │
└─────────────────────────────────────────────────────────────────┘

Payment Intent (Stripe)
├── Created server-side with amount
├── Returns clientSecret
├── Client uses secret to complete payment
└── Tracked by Stripe payment ID

Webhook
├── Stripe → Your server communication
├── Real-time payment status updates
├── Signature verified for security
└── Automatically updates your database

Code Lifecycle
├── pending ...... Newly created, waiting for payment
├── paid ......... Successfully paid via Stripe
└── cancelled .... Manually cancelled (not used)


┌─────────────────────────────────────────────────────────────────┐
│                    URLS & ROUTES                                 │
└─────────────────────────────────────────────────────────────────┘

Public Routes:
├── / ............................ Homepage
├── /pago ........................ Payment page (clients)
└── /pago/confirmacion ........... Success page

Protected Routes:
└── /admin ....................... Admin dashboard (password)

API Endpoints (Netlify Functions):
├── /.netlify/functions/validate-code .... POST: Validate code
├── /.netlify/functions/verify-payment ... GET: Verify payment status
└── /.netlify/functions/stripe-webhook ... POST: Stripe webhook


┌─────────────────────────────────────────────────────────────────┐
│                    MONITORING & LOGS                             │
└─────────────────────────────────────────────────────────────────┘

Where to Check:
├── Netlify Dashboard → Functions → Logs
├── Stripe Dashboard → Webhooks → Attempts
├── Admin Dashboard → Real-time payment status
└── Browser Console → Frontend errors


┌─────────────────────────────────────────────────────────────────┐
│                    QUICK COMMANDS                                │
└─────────────────────────────────────────────────────────────────┘

Development:
├── npm run dev .................. Start dev server
├── npm run build ................ Build for production
└── npm run generate-code ........ Generate payment code

Deployment:
├── git push ..................... Auto-deploy to Netlify
└── Check Netlify dashboard ...... View deploy status
```

---

## Summary

Your PageVolt payment system is **production-ready** with:

✅ **Secure payment processing** via Stripe  
✅ **Code-based payment system** for controlled access  
✅ **Automatic status updates** via webhooks  
✅ **Admin dashboard** to track everything  
✅ **Mobile-responsive** design  
✅ **PCI compliant** (card data never touches your server)  

**Next steps:**
1. Read `SETUP.md` for deployment instructions
2. Use `QUICK-REFERENCE.md` for daily operations
3. Follow `WORKFLOW.md` for your first client

🚀 **Ready to start accepting payments!**
