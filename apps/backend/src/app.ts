import dotenv from 'dotenv';
dotenv.config()

import { registerController } from '@/controllers/auth/register.controller.js';
import cors from 'cors';
import express from 'express';




const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/register', registerController);


export { app };
