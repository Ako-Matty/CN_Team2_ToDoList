const { Router } = require("express");
const userRouter = Router();

const { comparePass, hashPass} = require("../middleware/index");
const { login, register} = require("./controllers");

userRouter.post("/users/login", comparePass, login);
userRouter.post("/users/register", hashPass, register)


module.exports = userRouter; 