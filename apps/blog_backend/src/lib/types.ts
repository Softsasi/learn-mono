/** Shared domain types — the application's data contract, independent of
 * any specific layer (route, service, or repository). */
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface CreateTodoInput {
  title: string;
  completed?: boolean;
}
