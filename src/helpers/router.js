'use strict';

const debug = require('debug')('fastify-test:helpers:routes');

const Router = {

  route: (app, routers, prefix = '') => {
    routers.forEach((router) => {
      if (router.routes instanceof Array) {
        return Router.route(app, router.routes, router.prefix);
      }

      if (router.routes instanceof Function) {
        debug('registering route');

        app.register(router.routes, {prefix: `${prefix || ''}${router.prefix || ''}`});
      }
    });
  },

  dumpRoute: (app) => {
    for (const route of app) {
      for (const path of Object.keys(route)) {
        for (const method of Object.keys(route[path])) {
          console.log(`${method.toUpperCase()} ${path}`);
        }
      }
    }
  }
};

module.exports = Router;
