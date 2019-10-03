# OpenAPI specification
---

The engineering team at Paymium has been quietly transitioning away from our old API documentation, and migrating to new docs that are based on an OpenAPI 2.0 schema. The new documentation is a significant improvement and provides benefits to both third party developers and Paymium engineering.

## Main changes
The main change is currency amounts format (see below for details). It were represented using the type Number in JSON. The accuracy for this data type returned by our servers was an arbitrary precision integer arithmetic (double). To conform with JSON standard and avoid that JSON clients parse these data as normal binary floating point arithmetic (float), we changed this representation into String type.

# What's New
---

## `POST` /user/withdrawals

> Create withdrawal

Withdrawals used:

    POST /user/orders with "Transfer" type

It's no longer necessary to specify type property with this new endpoint.

## `POST` /user/email_transfers

> Create email transfer

Email transfers used:

    POST /user/orders with "EmailTransfer" type
It's no longer necessary to specify type property with this new endpoint.


## `DELETE` /user/orders/{uuid}

> Cancel order

Now returns deleted order.

It replaces old endpoint:

    DELETE /user/orders/{uuid}/cancel

Old endpoint is marked as *DEPRECATED*, it didn't respond to REST resource naming in using CRUD function name in URI.
It still works in this API version. 



# What's Changed
---

## `GET` /data/{currency}/ticker


### Return Type:

Changed response : **200 OK**

* Changed content type : `application/json; charset=utf-8`

    * Changed property `high` (number -> string)
        > 24h high price

    * Changed property `low` (number -> string)
        > 24h low price

    * Changed property `volume` (number -> string)
        > 24h volume

    * Changed property `bid` (number -> string)
        > bid price

    * Changed property `ask` (number -> string)
        > ask price

    * Changed property `midpoint` (number -> string)
        > midpoint price

    * Changed property `price` (number -> string)
        > price of latest trade

    * Changed property `variation` (number -> string)
        > 24h variation (percentage)

## `GET` /data/{currency}/trades


## Return Type:

Changed response : **200 OK**
> An array of trades

* Changed content type : `application/json; charset=utf-8`

    Changed items (object):

    * Changed property `traded_btc` (number -> string)
        > amount of BTC traded

    * Changed property `traded_currency` (number -> string)
        > amount of currency traded

    * Changed property `price` (number -> string)
        > price per BTC

## `GET` /data/{currency}/depth


### Return Type:

Changed response : **200 OK**

* Changed content type : `application/json; charset=utf-8`

    * Changed property `bids` (array)

        Changed items (object):

        * Changed property `amount` (number -> string)
            > amount at price

        * Changed property `price` (number -> string)

    * Changed property `asks` (array)

        Changed items (object):

        * Changed property `amount` (number -> string)
            > amount at price

        * Changed property `price` (number -> string)

## `GET` /user


### Return Type:

Changed response : **200 OK**

* Changed content type : `application/json; charset=utf-8`

    * Changed property `balance_btc` (number -> string)
        > available BTC balance

    * Changed property `locked_btc` (number -> string)
        > BTC balance locked in trading

    * Changed property `balance_eur` (number -> string)
        > available EUR balance

    * Changed property `locked_eur` (number -> string)
        > EUR balance locked in trading

## `GET` /user/orders


### Return Type:

Changed response : **200 OK**

* Changed content type : `application/json; charset=utf-8`

    Changed items (object):

    * Changed property `amount` (number -> string)
        > currency amount

    * Changed property `currency_fee` (number -> string)
        > currency fee collected

    * Changed property `btc_fee` (number -> string)
        > btc fee collected

    * Changed property `traded_btc` (number -> string)

    * Changed property `traded_currency` (number -> string)

    * Changed property `price` (number -> string)

    * Changed property `account_operations` (array)

        Changed items (object):

        * Changed property `amount` (number -> string)
            > currency amount

## `POST` /user/orders


### Return Type:

Changed response : **201 Created**

* Changed content type : `application/json; charset=utf-8`

    * Changed property `amount` (number -> string)
        > currency amount

    * Changed property `currency_fee` (number -> string)
        > currency fee collected

    * Changed property `btc_fee` (number -> string)
        > btc fee collected

    * Changed property `traded_btc` (number -> string)

    * Changed property `traded_currency` (number -> string)

    * Changed property `price` (number -> string)

    * Changed property `account_operations` (array)

        Changed items (object):

        * Changed property `amount` (number -> string)
            > currency amount

## `GET` /user/orders/{uuid}


### Return Type:

Changed response : **200 OK**

* Changed content type : `application/json; charset=utf-8`

    * Changed property `amount` (number -> string)
        > currency amount

    * Changed property `currency_fee` (number -> string)
        > currency fee collected

    * Changed property `btc_fee` (number -> string)
        > btc fee collected

    * Changed property `traded_btc` (number -> string)

    * Changed property `traded_currency` (number -> string)

    * Changed property `price` (number -> string)

    * Changed property `account_operations` (array)

        Changed items (object):

        * Changed property `amount` (number -> string)
            > currency amount

## `DELETE` /user/orders/{uuid}/cancel


## `POST` /merchant/create_payment


### Return Type:

Changed response : **201 Created**

* Changed content type : `application/json; charset=utf-8`

    * Changed property `amount` (number -> string)

    * Changed property `btc_amount` (number -> string)
        > BTC amount to pay

    * Changed property `account_operations` (object)

        * Changed property `amount` (number -> string)
            > currency amount

## `GET` /merchant/get_payment/{uuid}


### Return Type:

Changed response : **200 OK**

* Changed content type : `application/json; charset=utf-8`

    * Changed property `amount` (number -> string)

    * Changed property `btc_amount` (number -> string)
        > BTC amount to pay

    * Changed property `account_operations` (object)

        * Changed property `amount` (number -> string)
            > currency amount

