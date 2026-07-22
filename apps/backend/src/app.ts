import dotenv from 'dotenv';
dotenv.config()

import cors from 'cors';
import express from 'express';
import { registerController } from './controllers/auth/register.controller.js';
import { todosController } from './controllers/todos/todos.controller.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/todos',todosController);
app.post('/register', registerController);


export { app };
