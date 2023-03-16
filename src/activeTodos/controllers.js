const ActiveTodo = require("./model")
const User = require("../user/model")



const addActiveTodo = async (req, res) => {
    try {
        if (req.authCheck) {
            const newActiveTodo = await ActiveTodo.create(req.body)

            res.status(201). json({

                message: "success",
                todo: newActiveTodo
            })
        }
    } catch (error) {
        res.status(501).json({ message})
    }
};






const deleteActiveToDo = async (req, res) => {
    try {
        if(req.authCheck) {
            const user = await user.findone({
                where: {
                    todo: req.authCheck.username
                }
            });

            const removeActiveTodo = await ActiveTodo.destroy({
                where: {
                    todo: req.body.todo
                }
            });
            res.status(204).json({
                message: "success",
                todo: removeActiveTodo
            })
        }
        if(!req.body.todo){
            const error = new Error("todo not found");
            req.status(404).json({ message: "error", error: Error})
        }  
    } catch (error) {
        res.status(501).json({ message })
        
    }
};




module.exports = {
addActiveTodo,
deleteActiveToDo

}
