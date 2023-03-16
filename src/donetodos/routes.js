const { Router } = require("express");
const { addDoneTodo, deleteDoneTodo } = require("./controllers");

const { tokenCheck } = require("../middleware/index");

const doneTodoRouter = Router();

doneTodoRouter.post("./donetodos/adddonetodo", tokenCheck, addDoneTodo)
doneTodoRouter.delete("./doentodos/delete", tokenCheck, deleteDoneTodo)



module.exports = doneTodoRouter;

