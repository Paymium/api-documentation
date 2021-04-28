'use strict';
const ccxt = require ('ccxt');

(async function () {
  let paymium = new ccxt.paymium({
    apiKey: 'YOUR_PUBLIC_API_KEY',
    secret: 'YOUR_SECRET_PRIVATE_KEY',
  })

  console.log(paymium.id, await paymium.privatePostUserPaymentRequests({ "currency": "BTC", "amount": "0.001", "email": "johnsmith@example.com", "comment": "For the restaurant", "payment_split": "0" }))
})();
