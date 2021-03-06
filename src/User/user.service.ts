import { hash } from "bcrypt";
import { getCustomRepository } from "typeorm";

import { IUserRequest } from "../dtos/IUser";
import { UserRepository } from "./user.repository";

export class UserService {
  async create({ username, email, password }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    if (!email) {
      throw new Error("Email Incorrect");
    }

    const userAlreadyExist = await userRepository.findOne({
      email,
    });

    if (userAlreadyExist) {
      throw new Error("user already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = userRepository.create({
      username,
      email,
      password: passwordHash,
    });

    await userRepository.save(user);

    return user;
  }
  async getAll() {
    const userRepository = getCustomRepository(UserRepository);
    const users = await userRepository.find();

    return users;
  }
  async getUser(id: string) {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findOne(id);

    return user;
  }

  async updateUser(id: string, { username, email, password }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findOne(id);

    const passwordHash = await hash(password, 8);

    if (user) {
      userRepository.merge(user, {
        username,
        email,
        password: passwordHash,
      });
      const uptadedUser = await userRepository.save(user);

      return uptadedUser;
    }

    throw new Error("User not found");
  }

  async deleteUser(id: string): Promise<void> {
    const userRepository = getCustomRepository(UserRepository);
    await userRepository.delete(id);
  }
}
