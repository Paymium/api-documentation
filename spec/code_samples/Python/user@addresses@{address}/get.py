# coding=utf-8

import ccxt

paymium = ccxt.paymium({
  'apiKey': 'YOUR_PUBLIC_API_KEY',
  'secret': 'YOUR_SECRET_PRIVATE_KEY',
})

print(paymium.privateGetUserAddressesAddress({"address": "1HdjGr5WCHcnmW1tNNsHX7fh4Jr6C3PeKe"})))
