'use strict';
const ccxt = require ('ccxt');

(async function () {
  let paymium = new ccxt.paymium({
    apiKey: 'YOUR_PUBLIC_API_KEY',
    secret: 'YOUR_SECRET_PRIVATE_KEY',
  })

  console.log(paymium.id, await paymium.privatePostUserOrders({ "type": "LimitOrder", "currency": "EUR", "direction": "buy", "price": "54000", "currency_amount": "100" }))
})();
