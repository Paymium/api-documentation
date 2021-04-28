'use strict';
const ccxt = require ('ccxt');

(async function () {
  let paymium = new ccxt.paymium({
    apiKey: 'YOUR_PUBLIC_API_KEY',
    secret: 'YOUR_SECRET_PRIVATE_KEY',
  })

  console.log(paymium.id, await paymium.privateDeleteUserOrdersUuid({ "uuid": "20f8dd15-ae87-4617-a353-d0996be60010" }))
})();
