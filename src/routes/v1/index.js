'use strict';

const debug = require('debug')('fastify-test:routes:v1:index');

debug('configuring routes');

const example = require('./example');

const routes = [
  {
    prefix: '/example',
    routes: example
  }
];

module.exports = routes;
