import argon2 from "argon2";


import { sendEmail } from '../lib/email.js';
import { emailNormalizer, userNameGenerator } from '../lib/index.js';
import { AuthRepository } from '../repositories/auth/auth.repository.js';
import type { RegisterRequestBody } from '../types/index.js';

const authRepository = new AuthRepository();

export const registerService = async ({ email, password, first_name, last_name }: RegisterRequestBody) => {
  let modifiedEmail = emailNormalizer(email);
  console.log({
    email,
    modifiedEmail
  });


  const exists = await authRepository.findUserByEmail(modifiedEmail);

    if (exists) {
      return { error: 'Email already exists', status: 400 };
    }

  const userName = userNameGenerator(first_name, last_name);
  const hashedPassword = await argon2.hash(password);

   await authRepository.createUser({
    modifiedEmail, hashedPassword, userName, first_name, last_name
   });

    await sendEmail({
      to: modifiedEmail,
    } );

  return { message: 'User registered successfully', email: modifiedEmail };
}
