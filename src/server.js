require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sync } = require("./db/connection");

const port = process.env.PORT || 80;

// const User = require("./users")

const User = require("./users/model");
const activeTodo = require("./activeTodos/model");

const userRouter = require("./users/routes");
const activeTodoRouter = require("./activeTodos/routes");


const app = express();


app.use(express.json());
app.use(cors());

const syncTables = () => {
    User.hasMany(activeTodo);
    activeTodo.belongsTo(User);

    User.sync({ alter: true, force: false });
    activeTodo.sync({ alter: true, force: false });
}

app.get("/health", (req, res) =>
    res.status(200).json({ message: "API is working" })
);


app.use(userRouter);
app.use(activeTodoRouter);

app.listen(port, () => {
    syncTables();
    console.log (`App is listening on ${port}`);
})

