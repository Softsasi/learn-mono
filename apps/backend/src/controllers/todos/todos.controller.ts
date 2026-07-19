import { Todo } from '../../todo.js';


export const todosController = (req: any, res: any) => {
    const todos = Todo();
    res.json(todos);
}
