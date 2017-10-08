'use strict';

const debug = require('debug')('fastify-test:app');
const fastify = require('fastify');

debug('bootstrapping application');

const Router = require('./helpers/router');
const Env = require('./config/env');

const routes = require('./routes');

module.exports = (port) => {
  return new Promise((resolve, reject) => {
    const app = fastify();

    port = port || Env.PORT || 3000;

    Router.route(app, routes);

    app.ready(() => {
      Router.dumpRoute(app);
    });

    app.listen(port, (err) => {
      /* istanbul ignore next */
      if (err) {
        return reject(err);
      }
      resolve(app);
    });

    app.server.once('error', reject);
  });
};
