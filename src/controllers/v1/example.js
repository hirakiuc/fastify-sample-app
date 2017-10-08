'use strict';

const debug = require('debug')('fastify-test:controllers:example');

const ExampleController = {

  /**
   * @api {get} v1/example/ Example
   * @apiVersion 1.0.0
   * @apiName Example
   * @apiGroup Examples
   * @apiPermission any
   *
   * @apiDescription Example.
   */
  index: (request, reply) => {
    debug('executing index action');

    reply.send({message: 'example'});
  },

  get: (request, reply) => {
    debug('executing get action');

    reply.send({message: `GET ${request.params.id}`});
  }
};

module.exports = ExampleController;
