import { describe, expect, it } from 'vitest';

import { getHealthStatus } from '../health.service.js';

describe('getHealthStatus', () => {
  it('reports status ok with a timestamp and uptime', () => {
    const result = getHealthStatus();

    expect(result.status).toBe('ok');
    expect(new Date(result.timestamp).toString()).not.toBe('Invalid Date');
    expect(result.uptime).toBeGreaterThanOrEqual(0);
  });
});
