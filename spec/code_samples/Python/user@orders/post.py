# coding=utf-8

import ccxt

paymium = ccxt.paymium({
  'apiKey': 'YOUR_PUBLIC_API_KEY',
  'secret': 'YOUR_SECRET_PRIVATE_KEY',
})

print(paymium.privatePostUserOrders({ "type": "LimitOrder", "currency": "EUR", "direction": "buy", "price": "54000", "currency_amount": "100" }))
