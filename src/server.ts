import express from "express";
import "reflect-metadata";
import "./database";

import routes from "./routes";

const server = express();
const PORT = process.env.PORT || 3333;

server.use(express.json());

server.use("/users", routes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
