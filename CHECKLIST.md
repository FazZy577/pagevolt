# 📋 Pre-Launch Checklist

## ✅ What's Already Done

- [x] Payment page built (`/pago`)
- [x] Success page built (`/pago/confirmacion`)
- [x] Admin dashboard built (`/admin`)
- [x] Stripe integration complete
- [x] Netlify Functions ready
- [x] Code generator script ready
- [x] Webhook handler ready
- [x] All styling matches your site
- [x] Mobile-responsive design
- [x] Build verified (successful)
- [x] Complete documentation

## 🚀 Deployment Checklist

### Before You Deploy

- [ ] Read `SETUP.md` completely
- [ ] Create Stripe account
- [ ] Get Stripe test keys
- [ ] Have GitHub repository ready
- [ ] Have Netlify account ready

### Deployment Steps

- [ ] Push code to GitHub
- [ ] Connect GitHub to Netlify
- [ ] Deploy to Netlify
- [ ] Add environment variables in Netlify:
  - [ ] `VITE_STRIPE_PUBLIC_KEY` (from Stripe)
  - [ ] `STRIPE_SECRET_KEY` (from Stripe)
- [ ] Redeploy after adding env vars
- [ ] Verify site loads at your Netlify URL

### Stripe Webhook Setup

- [ ] Go to Stripe Dashboard → Webhooks
- [ ] Click "Add endpoint"
- [ ] Enter: `https://your-site.netlify.app/.netlify/functions/stripe-webhook`
- [ ] Select event: `payment_intent.succeeded`
- [ ] Copy webhook secret (starts with `whsec_`)
- [ ] Add `STRIPE_WEBHOOK_SECRET` to Netlify
- [ ] Redeploy site

### Testing (Test Mode)

- [ ] Run `npm run generate-code` locally
- [ ] Create a test payment code
- [ ] Go to your site `/pago`
- [ ] Enter test code
- [ ] Use test card: `4242 4242 4242 4242`
- [ ] Verify redirect to `/pago/confirmacion`
- [ ] Check success page shows correctly
- [ ] Go to `/admin` 
- [ ] Login with password: `pagevolt2026`
- [ ] Verify payment shows as "Pagado"
- [ ] Check Stripe Dashboard → Payments (payment should appear)
- [ ] Check Netlify Functions logs (no errors)

### Security

- [ ] Change admin password in `src/components/Admin.jsx` (line 13)
- [ ] Verify webhook signature validation is working
- [ ] Test with invalid code (should reject)
- [ ] Test with used code (should reject)

### Go Live

- [ ] Get Stripe **live** keys (not test)
- [ ] Update `VITE_STRIPE_PUBLIC_KEY` with live key
- [ ] Update `STRIPE_SECRET_KEY` with live key
- [ ] Update webhook in Stripe to use live mode
- [ ] Update `STRIPE_WEBHOOK_SECRET` with live webhook secret
- [ ] Redeploy
- [ ] Do a real test payment (€0.50)
- [ ] Verify it works end-to-end
- [ ] Refund test payment
- [ ] You're live! 🎉

### First Real Client

- [ ] Generate real payment code
- [ ] Send code via Instagram
- [ ] Wait for payment
- [ ] Check admin dashboard
- [ ] Verify payment received
- [ ] Send thank you message
- [ ] Start building their website!

## 🔍 Verification Steps

### After Each Deploy

1. Visit `your-site.com/pago` - Should load
2. Visit `your-site.com/admin` - Should load
3. Check Netlify Functions are deployed
4. Check environment variables are set
5. Test a payment (test mode)

### Weekly Maintenance

- [ ] Check admin dashboard for pending payments
- [ ] Download backup of `payment-codes.json`
- [ ] Review Stripe dashboard for any issues
- [ ] Check webhook attempts (Stripe Dashboard)

## 🎯 Success Criteria

You're ready when:
- ✅ Site deploys without errors
- ✅ Payment page loads correctly
- ✅ Test payment goes through successfully
- ✅ Webhook updates payment status
- ✅ Admin dashboard shows payment
- ✅ Email receipt is sent
- ✅ Admin password is changed

## 📞 If Something Goes Wrong

### Payment fails
1. Check Netlify Functions logs
2. Verify env vars are correct
3. Check Stripe API keys are valid
4. Test with different card

### Webhook not working
1. Check Stripe Dashboard → Webhooks → Attempts
2. Verify webhook URL is correct
3. Check webhook secret in Netlify
4. Look at Netlify Functions logs for errors

### Admin dashboard issues
1. Check browser console for errors
2. Verify `payment-codes.json` exists
3. Clear browser cache
4. Try incognito mode

## 🎉 Launch Day

When you're ready to accept real payments:

1. Switch to live Stripe keys ✅
2. Update webhook to live mode ✅
3. Test with real €0.50 payment ✅
4. Announce on Instagram ✅
5. Send first client a code ✅
6. Celebrate your professional payment system! 🎊

---

**Estimated time to complete checklist: 30-45 minutes**

Start with `SETUP.md` for detailed instructions on each step!
