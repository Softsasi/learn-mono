import dotenv from 'dotenv';
dotenv.config()

import cors from 'cors';
import express from 'express';
import { registerController } from './controllers/auth/register.controller.js';
import { todosController } from './controllers/todos/todos.controller.js';
import { AuthRepository } from './repository/auth/auth.repository.js';
const authRepo = new AuthRepository();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/todos',todosController);
app.post('/register', registerController);

app.get('/users/:id',async (req, res)=> {
  try {
    const id =Number(req.params.id);

if (Number.isNaN(id)) {
  return res.status(400).json({
    message: "Invalid user id"
  });
}


  const result = await authRepo.deleteUser(id)

  if(!result) {
   return res.status(404).json({
      "message": "user not found"
    })
  }

 return  res.json(result)
  } catch (error) {
 return   res.json(error)

  }

})


app.get('/users',async (req, res)=>{
  return res.json(await authRepo.getAllUsers())
})


export { app };
