import fs from 'node:fs';
import { USERS_FILE } from '../../constant.js';

export const users: { email: string; password: string }[] = JSON.parse(
    fs.readFileSync(USERS_FILE, 'utf8')
);

export class AuthRepository {
  public async findUserByEmail(email: string) {
    const user = users.find((user) => user.email === email);
    return user || null;
  }

  public async createUser(email: string, password: string) {
    const newUser = { email, password };
    users.push(newUser);
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    return newUser;
  }



}
