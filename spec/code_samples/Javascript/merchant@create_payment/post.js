'use strict';
const ccxt = require('ccxt');

(async function () {
  let paymium = new ccxt.paymium({
    apiKey: 'YOUR_PUBLIC_API_KEY',
    secret: 'YOUR_PRIVATE_API_KEY',
  })

  console.log(paymium.id, await paymium.privatePostMerchantCreatePayment({
    "amount": "0.0001",
    "payment_split": "0",
    "currency": "BTC",
    "callback_url": "https://myonlineshop/payments/order-987978/callback",
    "redirect_url": "http://myonlineshop/payments/order-987978/success",
    "merchant_reference": "order-987978"
  }))
})();
