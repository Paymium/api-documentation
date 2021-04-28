# coding=utf-8

import ccxt

paymium = ccxt.paymium({
  'apiKey': 'YOUR_PUBLIC_API_KEY',
  'secret': 'YOUR_SECRET_PRIVATE_KEY',
})

print(paymium.privatePostMerchantCreatePayment({
  "amount": "0.0001",
  "payment_split": "0",
  "currency": "BTC",
  "callback_url": "https://myonlineshop/payments/order-987978/callback",
  "redirect_url": "http://myonlineshop/payments/order-987978/success",
  "merchant_reference": "order-987978"
}))