const { Router } = require("express");
const { deleteActiveToDo, addActiveTodo } = require("./controllers");


const { tokenCheck } = require("../middleware");

const activeTodoRouter = Router();

activeTodoRouter.post("/activetodos/adddonetodo", tokenCheck, addActiveTodo)
activeTodoRouter.delete("/activetodos/deleteactivetodos", tokenCheck, deleteActiveToDo )




module.exports = activeTodoRouter;






