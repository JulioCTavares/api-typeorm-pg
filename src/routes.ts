import { Router } from "express";

import { UserController } from "./User/user.controller";

const routes = Router();

const userController = new UserController();

routes.post("/", userController.createUser);
routes.get("/", userController.getAllUsers);
routes.get("/:id", userController.getUser);
routes.put("/:id", userController.updateUser);
routes.delete("/:id", userController.deleteUser);

export default routes;
