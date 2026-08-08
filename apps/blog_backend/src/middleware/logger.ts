import type { Middleware } from 'nextrush';

/** Request logger — logs the HTTP method, path, status code, and duration for
 * every request. A simple example of a before/after middleware (wraps next()). */
export function logger(): Middleware {
  return async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.info(ctx.method + ' ' + ctx.path + ' ' + ctx.status + ' - ' + ms + 'ms');
  };
}
