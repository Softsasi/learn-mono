

import {prisma} from '@quill/db'

export class AuthRepository {

  async findUserByEmail(email: string) {
    return await prisma.auth.findUnique({
      where: {
        email,
      },
    });
  }


  async createUser({ modifiedEmail, hashedPassword, userName, first_name, last_name }: { modifiedEmail: string; hashedPassword: string; userName: string; first_name: string; last_name: string }) {

    return await prisma.auth.create({
      data: {
        email: modifiedEmail,
        password: hashedPassword,
        user_name: userName,
        user: {
          create: {
            first_name,
            last_name,
          }
        }
      },
    });
  }


}
