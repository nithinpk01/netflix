const express = require("express");
const controller = require("../controller/user-controller");

const User = new express.Router();
const auth = require('../middleware/verifyToken')

User.post("/login", controller.login);
User.post("/signup", controller.signup);
User.get("/list", auth, controller.list);
User.get("/list/:id", auth, controller.listById);
User.put("/:id", auth, controller.update);
User.delete("/:id", auth, controller.delete);

module.exports = User;
