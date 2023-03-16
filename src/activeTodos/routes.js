const { Router } = require("express");
const { deleteActiveToDo } = require("./controllers");

const activeTodoRouter = Router();


activeTodoRouter.delete("/activetodos/deleteactivetodos", tokenCheck, deleteActiveToDo )




module.exports = activeTodoRouter;






