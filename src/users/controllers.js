const User = require("./model");

const jwt = require("jsonwebtoken")


const login = async (req, res) => {
    try {
        if (req.authCheck) {
            res.status(201).json({
                message: "success",
                user: {
                    user: {
                        username: req.authCheck.username
                    }
                }
            })
            return;
        };
        
        const token = await jwt.sign({ id: req.user.id }, process.env.SECRET);

        res.status(201).json({message: "success",
    user: {
        username: req.user.username,
        token: token
    }
});
    } catch (error) {
        res.status(501).json({ errormessage: error.message, error: error });
    }
};


const register = async (req, res) => {

    try {

        const User = await User.create(req.body)

        res.status(201).json({message: "success",
    user: { 
        username: req.body.username, token: "token"

    }})
    } catch (error) {
        res.status(501).json({ errormessage: error.message, error: error });
    }
};






module.exports = {
    login,
    register

};
