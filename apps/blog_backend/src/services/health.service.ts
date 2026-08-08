/** Pure health-check payload builder — kept separate from the route so it's
 * unit-testable without spinning up an HTTP server. */
export function getHealthStatus(): {
  status: 'ok';
  timestamp: string;
  uptime: number;
} {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: Math.round(performance.now() / 1000),
  };
}
