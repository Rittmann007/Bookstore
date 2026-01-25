const mongoose = require("mongoose")

const bookschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishyear: {
        type: Number,
        reuired: true
    }
},{timestamps: true})

const Book = mongoose.model("Book" , bookschema)

module.exports = Book