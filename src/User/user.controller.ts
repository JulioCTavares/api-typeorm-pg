import { Request, Response } from "express";

import { UserService } from "./user.service";

export class UserController {
  async createUser(req: Request, res: Response) {
    const { username, email, password } = req.body;

    const userService = new UserService();

    await userService.create({ username, email, password });

    return res.status(201).send();
  }

  async getAllUsers(req: Request, res: Response) {
    const userService = new UserService();

    const users = await userService.getAll();

    return res.json(users);
  }
  async getUser(req: Request, res: Response) {
    const { id } = req.params;

    const userService = new UserService();

    const user = await userService.getUser(id);

    return res.json(user);
  }
}
