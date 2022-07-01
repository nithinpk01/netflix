const Movie = require("../model/movies");

module.exports = {

  // POST SIGNUP
  add: async (req, res) => {
    try {
      await Movie.create(req.body);
      return res.status(200).json({ message: "Movie added Successfully" });
    }
    catch (err) {
      return res.status(500).json(err)
    }
  },

  //LIST USERS
  list: async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.size) || 20;
    const skip = (page - 1) * limit;
    try {
      const user = await User.find().limit(limit).skip(skip);
      const total = await User.countDocuments({});
      if (user && user.length > 0 && total)
        return res.status(200).json({ data: user, page: page, size: limit, total: total });

      return res.status(204).json({ message: "No record found" });
    }
    catch (err) {
      return res.status(500).json(err)
    }
  },

  //LIST USER BY ID
  listById: async (req, res) => {
    try {
      const list = await User.findById(req.params.id);
      if (!list)
        return res.status(204).json({ message: "No user found" });

      return res.status(200).json(list);
    }
    catch (err) {
      return res.status(500).json(err)
    }
  },

  //UPDATE USER
  update: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.id });
      user.isAdmin = req.body.isAdmin
      user.firstName = req.body.firstName
      user.lastName = req.body.lastName
      user.mobile = req.body.mobile
      user.email = req.body.email

      await user.save();
      return res.status(200).json({ message: "Update successfull" });
    }
    catch (err) {
      return res.status(500).json(err)
    }
  },

  //DELETE USER
  delete: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: "User deleted" });
    }
    catch (err) {
      return res.status(500).json(err)
    }
  }
};
