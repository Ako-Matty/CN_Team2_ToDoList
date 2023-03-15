require("dotenv").config();
const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 80;

// const User = require("./users")


const app = express();


app.use(express.json());
app.use(cors());



app.listen(port, () => {
    console.log (`App is listening on ${port}`);
})

