import type { Todo } from '../lib/types.js';

/** In-memory todo repository — pure data access with no business logic.
 * A factory returning a closure keeps state per-instance (no global mutable
 * state) and keeps every operation unit-testable without an HTTP server. */
export function createTodoRepository() {
  const todos = new Map<string, Todo>();
  let nextId = 1;

  return {
    findAll(): Todo[] {
      return [...todos.values()];
    },

    findById(id: string): Todo | undefined {
      return todos.get(id);
    },

    save(input: Omit<Todo, 'id'>): Todo {
      const todo: Todo = { ...input, id: String(nextId++) };
      todos.set(todo.id, todo);
      return todo;
    },

    delete(id: string): boolean {
      return todos.delete(id);
    },
  };
}

export type TodoRepository = ReturnType<typeof createTodoRepository>;
