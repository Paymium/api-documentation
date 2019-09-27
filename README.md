# Paymium OpenAPI Specification
[![Build Status](https://travis-ci.org/paymium/api-documentation.svg?branch=master)](https://travis-ci.org/paymium/api-documentation)

## Links

- [Reference Documentation (ReDoc)](https://paymium.github.io/api-documentation/)
- OpenAPI Raw Files: [JSON](https://paymium.github.io/api-documentation/openapi.json) [YAML](https://paymium.github.io/api-documentation/openapi.yaml)
- [Old API documentation](https://github.com/Paymium/old-api-documentation)

## Working on specification
### Install

1. Install [Node JS](https://nodejs.org/)
2. Clone repo and run `npm install` in the repo root

### Usage

#### `npm start`
Starts the development server.

#### `npm run build`
Bundles the spec and prepares web_deploy folder with static assets.

#### `npm test`
Validates the spec.

#### `npm run gh-pages`
Deploys docs to GitHub Pages. You don't need to run it manually if you have Travis CI configured.
