// *** Dependencies
// =============================================================
var express = require("express");
const mongoose = require("mongoose");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

//connect to mongodb
mongoose.connect("mongodb://localhost/fitnesstracker", {
    useNewUrlParser: true,
    useFindAndModify: false
});

//require routes
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));



app.listen(PORT, () => {
    console.log("App running on port!", PORT);
  });