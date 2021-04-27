# coding=utf-8

import ccxt

paymium = ccxt.paymium({
  'apiKey': 'YOUR_PUBLIC_API_KEY',
  'secret': 'YOUR_SECRET_PRIVATE_KEY',
})

print(paymium.privateGetMerchantGetPaymentUuid({ "uuid": "0a31a001-2deb-48f1-b413-f1a31a9f97c1" }))
