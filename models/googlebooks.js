// Google Books schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

var GoogleBooksSchema = new Schema ({
    title: {
        type: String,
        require: true
    },

    authors: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    },

    image: {
        type: String
    }, 

    link: {
        type: String,
        require: true
    }
});

var GoogleBooks = mongoose.model("GoogleBooks", GoogleBooksSchema);

module.exports = GoogleBooks; 