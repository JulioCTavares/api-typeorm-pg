import express from "express";

import routes from "./routes";

const server = express();

const PORT = process.env.PORT || 3333;

server.use(express.json());

server.use("/", routes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
