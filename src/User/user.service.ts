import { getCustomRepository } from "typeorm";

import { IUserRequest } from "../dtos/IUser";
import { UserRepository } from "./user.repository";

export class UserService {
  async create({ username, email, password }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    const user = userRepository.create({ username, email, password });

    await userRepository.save(user);

    return user;
  }
}
