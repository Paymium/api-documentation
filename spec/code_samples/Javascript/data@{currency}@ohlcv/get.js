'use strict';
const ccxt = require ('ccxt');

(async function () {
let paymium = new ccxt.paymium({
apiKey: 'YOUR_PUBLIC_API_KEY',
secret: 'YOUR_SECRET_PRIVATE_KEY',
})

console.log(paymium.id, await paymium.fetchOHLCV("eur","1m",undefined,undefined))
})();