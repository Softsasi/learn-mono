import { createRouter } from 'nextrush';

import type { CreateTodoInput } from '../lib/types.js';
import { createTodoRepository } from '../repositories/todos.repository.js';
import { createTodoService } from '../services/todos.service.js';

const todoService = createTodoService(createTodoRepository());

export const todosRouter = createRouter();

todosRouter.get('/', (ctx) => {
  const status = typeof ctx.query.status === 'string' ? ctx.query.status : undefined;
  ctx.json(todoService.list(status));
});

todosRouter.get('/:id', (ctx) => {
  ctx.json(todoService.get(ctx.params.id));
});

todosRouter.post('/', (ctx) => {
  const input = (ctx.body ?? {}) as Partial<CreateTodoInput>;
  ctx.status = 201;
  ctx.json(todoService.create({ title: input.title ?? '', completed: input.completed }));
});

todosRouter.delete('/:id', (ctx) => {
  todoService.remove(ctx.params.id);
  ctx.status = 204;
});
