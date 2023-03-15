const ActiveTodo = require("./model")



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


module.exports = {
addActiveTodo
}
