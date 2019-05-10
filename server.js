var express = require("express");
var mogoose = require("mongoose");
var logger = require("logger");
var path = require("path");
var axios = require("axios"); 

// db models
var db = require("./models"); 
// application port (http://localhost:PORT)
var PORT = process.env.PORT || 3000;

//initialize express
var app = express();

// connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googleBooksApp";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

//use morgan logger for logging requests
app.use(logger("dev")); 
//Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make a public a static folder
app.use(express.static(path.join(__dirname, 'public')));

// ------------------------------
// ROUTES
// ------------------------------

// Start the server
app.listen(PORT, function(){
    console.log("Google Books app running on port: " + PORT + "!");
}); 


