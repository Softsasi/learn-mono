import dotenv from 'dotenv';
dotenv.config()

import cors from 'cors';
import express from 'express';
import { registerController } from './controllers/auth/register.controller.js';
import { todosController } from './controllers/todos/todos.controller.js';
import { transporter } from './lib/nodemailer.js';
const app = express();
const port = 8080;
console.log("transporter", transporter);

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/todos',todosController);
app.post('/register', registerController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
