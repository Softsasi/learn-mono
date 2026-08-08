import { createRouter } from 'nextrush';
import { registerService } from '../../services/register.service.js';
import type { RegisterRequestBody } from '../../types/index.js';
export const authRouter = createRouter();

authRouter.post('/login', (ctx) => {
  // Implement login logic here
  ctx.status = 200;
  ctx.json({ message: 'Login successful' });
});





authRouter.post('/register', async (ctx) => {

  const { email, password, first_name, last_name } = ctx.body as RegisterRequestBody;

  if (!email || !password || !first_name || !last_name) {
    ctx.status = 400;
    ctx.json({ message: 'All fields are required' });
    return;
  }

  console.log("[auth-routh]: i'm Pass");



  // Implement registration logic here

  const result = await registerService({ email, password, first_name, last_name });

  ctx.json({ message: 'User registered successfully', result });






});
