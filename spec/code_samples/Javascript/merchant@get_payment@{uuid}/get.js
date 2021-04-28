'use strict';
const ccxt = require('ccxt');

(async function () {
  let paymium = new ccxt.paymium({
    apiKey: 'YOUR_PUBLIC_API_KEY',
    secret: 'YOUR_PRIVATE_API_KEY',
  })

  console.log(paymium.id, await paymium.privateGetMerchantGetPaymentUuid({ "uuid": "0a31a001-2deb-48f1-b413-f1a31a9f97c1" }))
})();
