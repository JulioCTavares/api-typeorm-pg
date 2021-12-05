import { Request, Response } from "express";

import { UserService } from "./user.service";

export class UserController {
  async createUser(req: Request, res: Response) {
    const { username, email, password } = req.body;

    const userService = new UserService();

    await userService.create({ username, email, password });

    return res.status(201).send();
  }
}
