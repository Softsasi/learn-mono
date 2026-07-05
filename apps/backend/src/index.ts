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

app.post('/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Here you would typically save the user to a database
  console.log(`Registered user: ${email}`);

  res.status(201).json({ message: 'User registered successfully' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
