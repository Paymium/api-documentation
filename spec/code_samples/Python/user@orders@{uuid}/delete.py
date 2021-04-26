# coding=utf-8

import ccxt

paymium = ccxt.paymium({
  'apiKey': 'YOUR_PUBLIC_API_KEY',
  'secret': 'YOUR_SECRET_PRIVATE_KEY',
})

print(paymium.privateDeleteUserOrdersUuid({ "uuid": "20f8dd15-ae87-4617-a353-d0996be60010" }))
