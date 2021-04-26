# coding=utf-8

import ccxt

paymium = ccxt.paymium({
  'apiKey': 'YOUR_PUBLIC_API_KEY',
  'secret': 'YOUR_SECRET_PRIVATE_KEY',
})

print(paymium.privatePostUserPaymentRequests({ "currency": "BTC", "amount": "1.0", "email": "johnsmith@example.com", "comment": "For the restaurant", "payment_split": "0.5" }))
