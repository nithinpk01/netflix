const Movie = require("../model/movies");

module.exports = {

  // POST MOVIES
  add: async (req, res) => {
    try {
      await Movie.create(req.body);
      return res.status(200).json({ message: "Movie added Successfully" });
    }
    catch (err) {
      return res.status(500).json(err)
    }
  },

  //LIST MOVIES
  list: async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.size) || 20;
    const skip = (page - 1) * limit;
    try {
      const movie = await Movie.find().limit(limit).skip(skip);
      const total = await Movie.countDocuments({});
      if (movie && movie.length > 0 && total)
        return res.status(200).json({ data: movie, page: page, size: limit, total: total });

      return res.status(204).json({ message: "No record found" });
    }
    catch (err) {
      return res.status(500).json(err)
    }
  },

  //LIST MOVIE BY ID
  listById: async (req, res) => {
    try {
      const list = await Movie.findById(req.params.id);
      if (!list)
        return res.status(204).json({ message: "No movie found" });

      return res.status(200).json(list);
    }
    catch (err) {
      return res.status(500).json(err)
    }
  },

  //UPDATE MOVIE
  update: async (req, res) => {
    try {
      const movie = await Movie.findOne({ _id: req.params.id });
      movie.isSeries = req.body.isSeries
      movie.name = req.body.name

      await movie.save();
      return res.status(200).json({ message: "Update successfull" });
    }
    catch (err) {
      return res.status(500).json(err)
    }
  },

  //DELETE MOVIE
  delete: async (req, res) => {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: "Movie deleted" });
    }
    catch (err) {
      return res.status(500).json(err)
    }
  }
};
