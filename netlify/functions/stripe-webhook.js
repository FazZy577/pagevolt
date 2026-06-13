const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  console.log('stripe-webhook function called', { method: event.httpMethod });

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const sig = event.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let stripeEvent;

    try {
      stripeEvent = stripe.webhooks.constructEvent(
        event.body,
        sig,
        webhookSecret
      );
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Webhook signature verification failed' })
      };
    }

    // Handle successful payment
    if (stripeEvent.type === 'payment_intent.succeeded') {
      const paymentIntent = stripeEvent.data.object;
      const code = paymentIntent.metadata.code;

      console.log('Payment succeeded for code:', code);

      // Update payment code status with absolute path
      const codesPath = path.resolve(process.cwd(), 'data/payment-codes.json');
      console.log('Updating codes at:', codesPath);

      if (!fs.existsSync(codesPath)) {
        console.error('payment-codes.json not found at:', codesPath);
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ error: 'Base de datos de códigos no encontrada' })
        };
      }

      const codesData = JSON.parse(fs.readFileSync(codesPath, 'utf8'));

      const codeIndex = codesData.codes.findIndex(c => c.code === code);

      if (codeIndex !== -1) {
        codesData.codes[codeIndex].status = 'paid';
        codesData.codes[codeIndex].paidAt = new Date().toISOString();
        codesData.codes[codeIndex].stripePaymentId = paymentIntent.id;

        fs.writeFileSync(codesPath, JSON.stringify(codesData, null, 2));

        console.log(`Payment successful for code: ${code}`);
      } else {
        console.warn(`Code not found in database: ${code}`);
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ received: true })
    };
  } catch (error) {
    console.error('Webhook error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Webhook processing failed' })
    };
  }
};
