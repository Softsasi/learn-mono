import { registerService } from '../../services/auth/register.service.js';

export const registerController = async (req: any, res: any) =>{

  const { email, password }: { email: string; password: string } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const result = await registerService({email,password,});

  res.status(201).json(result);
}
