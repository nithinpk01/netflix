const express = require("express");
const  dbConfig  = require("./config/db-config");
require('dotenv').config();
const port = process.env.PORT;

const { User, Movies } = require("./src/routes");

const app = express();
dbConfig(); // db connection

app.listen(port);

console.log(`App listening at http://localhost:${port}`);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/user", User)
app.use("/movies", Movies)
app.use("/", (req, res) => {
    res.send("Welcome to netflix backend")
});