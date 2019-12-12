const Workout = require("../models/workout.js");
const app = require("express").Router();

  // Get all examples
  app.get("/api/workout", function(req, res) {
    Workout.find().then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  // Create a new example
  app.post("/api/workout", function(req, res) {
      console.log(req.body)
    Workout.create(req.body).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

module.exports = app;