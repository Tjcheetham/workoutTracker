// *** Dependencies
// =============================================================
var express = require("express");
const mongoose = require("mongoose");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker";


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

//connect to mongodb
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//require routes
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));



app.listen(PORT, () => {
    console.log("App running on port!", PORT);
  });