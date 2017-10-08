'use strict';

const debug = require('debug')('fastify-test:routes:v1:example');

debug('configuring routes');

const ExampleController = require('../../controllers/v1/example');

const routes = (fastify, opts, next) => {
  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            message: {
              type: 'string'
            }
          }
        }
      }
    },
    handler: ExampleController.index
  });

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            message: {
              type: 'string'
            }
          }
        }
      }
    },
    handler: ExampleController.get
  });

  next();
};

module.exports = routes;
