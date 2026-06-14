const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Códigos de pago - Actualizados automáticamente por npm run nuevo-cliente
const CODES = {
  "codes": [
    {
      "code": "PV-DEMO-12345",
      "clientName": "Café Demo",
      "amount": 49.5,
      "paymentType": "Primer pago (50%)",
      "totalProject": 99,
      "status": "pending",
      "createdAt": "2026-06-13T19:19:32.544Z",
      "description": "Web Esencial - Café Demo",
      "email": "demo@cafe.com"
    },
    {
      "code": "PV-BARDEL-6JHO0",
      "clientName": "Bar de l'Avia",
      "amount": 90,
      "paymentType": "Primer pago (50%)",
      "totalProject": 180,
      "status": "pending",
      "createdAt": "2026-06-13T22:22:49.583Z",
      "description": "web normal - Bar de l'Avia",
      "email": "popelvlad6@gmail.com"
    },
    {
      "code": "PV-PANET-API1D",
      "clientName": "Panet",
      "amount": 0,
      "paymentType": "Primer pago (50%)",
      "totalProject": 0,
      "status": "pending",
      "createdAt": "2026-06-13T23:06:54.042Z",
      "description": "Prueba - Panet",
      "email": "Vlad577@hotmail.com"
    },
    {
      "code": "PV-FAZZ-KCID6",
      "clientName": "fazz",
      "amount": 0.5,
      "paymentType": "Primer pago (50%)",
      "totalProject": 1,
      "status": "pending",
      "createdAt": "2026-06-14T09:45:04.810Z",
      "description": " - fazz",
      "email": ""
    },
    {
      "code": "PV-FAZZZ-5Z34W",
      "clientName": "fazzz",
      "amount": 0.5,
      "paymentType": "Primer pago (50%)",
      "totalProject": 1,
      "status": "pending",
      "createdAt": "2026-06-14T09:53:05.205Z",
      "description": " - fazzz",
      "email": ""
    },
    {
      "code": "PV-PRUEBA-LACPI",
      "clientName": "prueba1",
      "amount": 0.5,
      "paymentType": "Primer pago (50%)",
      "totalProject": 1,
      "status": "pending",
      "createdAt": "2026-06-14T10:00:51.799Z",
      "description": " - prueba1",
      "email": ""
    }
  ]
};

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

    console.log('Available codes:', CODES.codes.length);

    // Find the code
    const paymentCode = CODES.codes.find(c => c.code === code.toUpperCase());

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
