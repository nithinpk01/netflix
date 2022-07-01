const express = require("express");
const controller = require("../controller/movie-controller");

const Movies = new express.Router();
const auth = require('../middleware/verifyToken')

Movies.post("/", controller.add);
Movies.get("/list", auth, controller.list);
Movies.get("/list/:id", auth, controller.listById);
Movies.put("/:id", auth, controller.update);
Movies.delete("/:id", auth, controller.delete);

module.exports = Movies;
