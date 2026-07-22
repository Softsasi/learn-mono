import argon2 from "argon2";
import { sendEmail } from '../../lib/email.js';
import { emailNormalizer } from '../../lib/index.js';
import { AuthRepository } from '../../repository/auth/auth.repository.js';

const authRepository = new AuthRepository();

export const registerService = async ({ email, password }: { email: string; password: string }) => {
  let modifiedEmail = emailNormalizer(email);

  const exists = await authRepository.findUserByEmail(modifiedEmail);

    if (exists) {
      return { error: 'Email already exists', status: 400 };
    }

  const hashedPassword = await argon2.hash(password);

   await authRepository.createUser(modifiedEmail, hashedPassword);

    await sendEmail({
      to: modifiedEmail,
    });

  return { message: 'User registered successfully', email: modifiedEmail };
}
