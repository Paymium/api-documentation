# coding=utf-8

import ccxt

paymium = ccxt.paymium({
  'apiKey': 'YOUR_PUBLIC_API_KEY',
  'secret': 'YOUR_SECRET_PRIVATE_KEY',
})

print(paymium.privatePostUserWithdrawals({ "currency": "BTC", "amount": "1.0", "withdrawl_address": "1HdjLr5WCThbmW1tNNsFX7fh4Jr5C3PeKe" }))
