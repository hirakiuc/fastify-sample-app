'use strict';

const debug = require('debug')('fastify-test:plugins:index');

debug('loading plugins');

const RequestLogger = require('./request_logger');

module.exports = (app) => {
  RequestLogger(app);
};
