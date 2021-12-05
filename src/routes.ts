import { Router } from "express";

import { UserController } from "./User/user.controller";

const routes = Router();

const userController = new UserController();

routes.post("/", userController.createUser);

export default routes;
