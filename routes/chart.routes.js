// controller
import { generateChart } from '../controllers/chart.controller.js';

const routes = async (app, options) => {
  app.route({
    method: 'POST',
    url: '/generate',
    schema: {
      body: {
        type: 'object',
        properties: {
          canvas: {
            type: 'object',
            properties: {
              backgroundColor: { type: 'string' },
              width: { type: 'number' },
              height: { type: 'number' }
            },
            additionalProperties: false,
            required: ['backgroundColor', 'width', 'height']
          },
          type: { type: 'string' },
          data: { type: 'object' },
          options: { type: 'object' }
        },
        additionalProperties: false,
        required: ['canvas', 'type', 'data', 'options']
      },
      response: {
        200: {
          description: 'Success Response',
          type: 'object',
          properties: {
            statusCode: { type: 'integer' },
            message: { type: 'string' },
            data: { type: 'string' }
          }
        }
      }
    },
    handler: generateChart
  });
};

export default routes;
export const autoPrefix = '/chart';