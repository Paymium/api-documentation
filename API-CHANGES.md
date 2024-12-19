# API Changelog 1.1.0 vs. 1.1.1

## GET /user/orders
-  added the new optional 'query' request parameter 'page'
-  added the new optional 'query' request parameter 'per_page'
-  added the media type 'application/json; charset=utf-8' for the response with the status '200'

## DELETE /user/orders/{uuid}/cancel
-  api path removed with deprecation

## GET /user/price_alerts
- :warning: api path removed without deprecation

## POST /user/price_alerts
- :warning: api path removed without deprecation

## DELETE /user/price_alerts/{id}
- :warning: api path removed without deprecation

## GET /user/withdrawals
-  endpoint added

