const {Router} = require("express");

const userRouter = require("./userRoutes");
const loginRouter = require("./loginRouter");
const signRouter = require("./signRouter");
const routes = Router();

routes.use("/users", userRouter);
routes.use("/login", loginRouter);
routes.use("/sign", signRouter);

module.exports = routes;