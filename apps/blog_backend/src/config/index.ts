/** Centralized environment configuration.
 *
 * Read each variable once, convert its type, and provide a default — don't
 * scatter process.env reads across route handlers. Fail fast on missing
 * required values at startup, not deep in a request handler.
 *
 * @see https://nextrush.dev/docs/production/configuration
 */
export const config = {
  port: Number(process.env.PORT ?? 8080),
  host: process.env.HOST ?? '0.0.0.0',
  nodeEnv: process.env.NODE_ENV ?? 'development',
};
