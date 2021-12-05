import { Router } from "express";

import { UserController } from "./User/user.controller";

const routes = Router();

const userController = new UserController();

routes.post("/", userController.createUser);
routes.get("/", userController.getAllUsers);
routes.get("/:id", userController.getUser);

export default routes;
