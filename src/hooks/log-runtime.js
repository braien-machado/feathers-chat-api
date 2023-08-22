import { logger } from '../logger.js';

export const logRunTime = async (context, next) => {
  const startTime = Date.now();
  await next();

  const duration = Date.now() - startTime;
  logger.info(`Calling ${context.method} on ${context.path} took ${duration}ms`);
}
