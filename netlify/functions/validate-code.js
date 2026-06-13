const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  console.log('validate-code function called', { method: event.httpMethod });

  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight
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
    const { code } = JSON.parse(event.body);

    if (!code) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Código requerido' })
      };
    }

    // Read payment codes file with absolute path
    // In Netlify, the working directory is the site root
    const codesPath = path.resolve(process.cwd(), 'data/payment-codes.json');
    console.log('Reading codes from:', codesPath);

    if (!fs.existsSync(codesPath)) {
      console.error('payment-codes.json not found at:', codesPath);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Base de datos de códigos no encontrada' })
      };
    }

    const codesData = JSON.parse(fs.readFileSync(codesPath, 'utf8'));

    // Find the code
    const paymentCode = codesData.codes.find(c => c.code === code.toUpperCase());

    if (!paymentCode) {
      console.log('Code not found:', code);
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Código no válido' })
      };
    }

    if (paymentCode.status === 'paid') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Este código ya ha sido utilizado' })
      };
    }

    if (paymentCode.status === 'cancelled') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Este código ha sido cancelado' })
      };
    }

    // Create Stripe PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(paymentCode.amount * 100), // Convert to cents
      currency: 'eur',
      metadata: {
        code: paymentCode.code,
        clientName: paymentCode.clientName,
        description: paymentCode.description
      },
      receipt_email: paymentCode.email,
      description: `${paymentCode.description} - ${paymentCode.paymentType}`
    });

    console.log('PaymentIntent created successfully:', paymentIntent.id);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
        paymentData: {
          clientName: paymentCode.clientName,
          amount: paymentCode.amount,
          paymentType: paymentCode.paymentType,
          description: paymentCode.description
        }
      })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Error al procesar la solicitud' })
    };
  }
};
