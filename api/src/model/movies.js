const { Schema, model } = require("mongoose");

const Movies = new Schema({
    isSeries: {
        type: Boolean,
        default: false,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String
    },
    img: {
        type: String
    },
    imgTitle: {
        type: String
    },
    year: {
        type: String
    },
    genre: {
        type: String
    },
    duration: {
        type: Number
    },
    trailer: {
        type: String
    },
    video: {
        type: String
    }
}, { timestamps: true });

module.exports = model("Movies", Movies);

