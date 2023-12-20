//IMPORTS
// Load environment variables from a .env file into process.env.
// This line of code reads the .env file in the root of the project and adds the key-value pairs to the process.env object.
require("dotenv").config();

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// creates express app
const app = express();

//set views engine
app.set("view engine", "ejs");
//set views directory
app.set("views", "views");

// Add the body-parser middleware to handle incoming request bodies in URL-encoded form.
// The extended: false option ensures that incoming data is parsed as simple key-value pairs.
app.use(bodyParser.urlencoded({ extended: false }));

//public files served
app.use(express.static(path.join(__dirname, "public")));

// path.join(__dirname, 'public') ifadesi, path modülündeki join fonksiyonunu kullanarak dosya yolu oluşturur. __dirname ifadesi, dosyanın bulunduğu dizinin yolunu temsil eder. Bu yol, genellikle dosyanın çalıştırıldığı dizindir.

//mongoose connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => {
    app.listen(3300);
  })
  .catch((err) => {
    //if there is connection err
    console.log(err);
  });
