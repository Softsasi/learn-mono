import { createRouter } from 'nextrush';

import { getHealthStatus } from '../services/health.service.js';

export const healthRouter = createRouter();

healthRouter.get('/', (ctx) => {
  ctx.json(getHealthStatus());
});
