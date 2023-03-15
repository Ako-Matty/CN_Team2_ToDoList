const {Router} = require("express");
const userRouter = Router();

const { comparePass, } = require("../middleware/index");
const { login, } = require("./controllers");

userRouter.post("/users/login", comparePass, login);


module.exports = userRouter; 