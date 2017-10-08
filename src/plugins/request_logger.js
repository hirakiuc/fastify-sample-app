'use strict';

const debug = require('debug')('fastify-test:plugins:request_logger');

debug('loading plugins');

module.exports = (app) => {
  app.addHook('onRequest', (req, res, next) => {
    req.log.fatal(req.method);
    next();
  });
};
