'use strict';
const ccxt = require ('ccxt');

(async function () {
  let paymium = new ccxt.paymium({
    apiKey: 'YOUR_PUBLIC_API_KEY',
    secret: 'YOUR_SECRET_PRIVATE_KEY',
  })

  console.log(paymium.id, await paymium.privatePostUserWithdrawals({ "currency": "BTC", "amount": "1.0", "address": "1HdjGr6WCTcnmW1tNNsHX7fh4Jr5C2PeKe" }))
})();
