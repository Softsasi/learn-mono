import cors from 'cors';
import express from 'express';
import { Todo } from './todo.js';

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/todos', (req, res) => {
  const todos = Todo();

  res.json(todos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
