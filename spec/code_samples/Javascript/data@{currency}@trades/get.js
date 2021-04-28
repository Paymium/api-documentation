'use strict';
const ccxt = require('ccxt');

(async function () {
  let paymium = new ccxt.paymium({
    apiKey: 'YOUR_PUBLIC_API_KEY',
    secret: 'YOUR_PRIVATE_API_KEY',
  })

  console.log(paymium.id, await paymium.publicGetDataCurrencyTrades({ "currency": "eur" }))
})();
