const { Schema, model } = require("mongoose");

const Movies = new Schema({
    isSeries: {
        type: Boolean,
        default: false,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = model("Movies", Movies);

