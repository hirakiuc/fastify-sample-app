'use strict';

const debug = require('debug')('fastify-test:controllers:healthcheck');

const HealthCheckController = {

  /**
   *  @swagger
   *  /:
   *    get:
   *      description: Healthcheck
   *      produces:
   *        - application/json
   *      responses:
   *        200:
   *          description: Healthcheck
   */
  /**
   * @api {get} / Healthcheck
   * @apiVersion 1.0.0
   * @apiName Healthcheck
   * @apiGroup Status
   * @apiPermission any
   *
   * @apiDescription Verify if the API server is running.
   */
  index: (request, reply) => {
    debug('executing index action');

    reply.code(200).send({status: 'ok'});
  }
};

module.exports = HealthCheckController;
