import { USERS_FILE } from '@/constant.js';
import fs from 'node:fs';

export const users: { email: string; password: string; id: number }[] = JSON.parse(
    fs.readFileSync(USERS_FILE, 'utf8')
);


export class AuthRepository {
  public async findUserByEmail(email: string) {
    const user = users.find((user) => user.email === email);
    return user || null;
  }

  public async createUser(email: string, password: string) {
    const newUser = { email, password, id: users.length + 1 };

    users.push(newUser);
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    return newUser;
  }

  public async findById(id: number) {
    const user = users.find((user) => user.id === id);
    return user || null;
  }

  public async updateUser(id: number, email: string, password: string) {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return null;
    }

    users[userIndex] = { id, email, password };
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    return users[userIndex];
  }

  public async deleteUser(id: number) {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return null;
    }

    const deletedUser = users.splice(userIndex, 1)[0];
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    return deletedUser;
  }

  public async getAllUsers() {
    return users;
  }





}
