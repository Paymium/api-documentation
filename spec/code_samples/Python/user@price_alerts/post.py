# coding=utf-8

import ccxt

paymium = ccxt.paymium({
  'apiKey': 'YOUR_PUBLIC_API_KEY',
  'secret': 'YOUR_SECRET_PRIVATE_KEY',
})

print(paymium.privateGetUserPriceAlerts({ "token": "0ff2f39d-cd9f-4710-9eb5-3f8385f5e059", "notify_above": "60000", "notify_below": "40000" }))
