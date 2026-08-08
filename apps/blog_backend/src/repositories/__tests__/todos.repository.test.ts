import { describe, expect, it } from 'vitest';

import { createTodoRepository } from '../todos.repository.js';

describe('createTodoRepository', () => {
  it('saves and finds all todos', () => {
    const repo = createTodoRepository();
    const created = repo.save({ title: 'Ship NextRush', completed: false });

    expect(repo.findAll()).toContainEqual(created);
  });

  it('finds a todo by id', () => {
    const repo = createTodoRepository();
    const created = repo.save({ title: 'Test', completed: false });

    expect(repo.findById(created.id)).toEqual(created);
  });

  it('returns undefined for an unknown id', () => {
    const repo = createTodoRepository();

    expect(repo.findById('missing')).toBeUndefined();
  });

  it('deletes a todo and reports whether it existed', () => {
    const repo = createTodoRepository();
    const created = repo.save({ title: 'Remove me', completed: false });

    expect(repo.delete(created.id)).toBe(true);
    expect(repo.delete(created.id)).toBe(false);
    expect(repo.findAll()).toHaveLength(0);
  });
});
