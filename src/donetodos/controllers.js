const User = require("../user/model")
const ActiveTodo = require ("../activeTodo/model");
const Donetodo = require ("./model")




const addDoneTodo = async (req, res) => {
    try {
        if (req.authCheck) {
            const user = await User.findOne({
                where: { username: req.authCheck. username },
            });
            const deletetodo = await ActiveTodo.destroy({
                where: { todo: req.body.todo },
            });
       

        const newDoneTodo = await user.createDoneTodo({
            todo: req.body.todo
        });


        req.status(201).json({ message: "success", newDoneTodo });
        return;

     }

        res.status(401).json({ message: "user not authorized" })

    } catch (error) {
        res.status(201).json({ message })
    }
}





const deleteDoneTodo = async (req, res) => {
    try {
        if(req.authCheck) {
            const user = await user.findone({
                where: {
                    username: req.authCheck.username
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
addDoneTodo,
deleteDoneTodo



}