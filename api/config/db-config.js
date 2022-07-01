const mongoose = require("mongoose");
require('dotenv').config();
const dbUrl= process.env.dbURL;

module.exports = () => {
  mongoose.connect(dbUrl,()=>{
    console.log(`DB Connected to ${dbUrl}`)
  },
  e=>console.error(e))
};