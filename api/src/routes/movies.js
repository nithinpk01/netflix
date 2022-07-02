const express = require("express");
const controller = require("../controller/movie-controller");

const Movies = new express.Router();
const auth = require('../middleware/verifyToken')

Movies.post("/", auth, controller.add);
Movies.get("/", auth, controller.list);
Movies.get("list/:id", auth, controller.listById);
Movies.put("/:id", auth, controller.update);
Movies.delete("/:id", auth, controller.delete);
Movies.get("/random", auth, controller.random);

module.exports = Movies;
