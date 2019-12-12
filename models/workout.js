const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now
    },
    exerciseType: {
        type: String,
        trim: true,
        required: true
    },
    exerciseName: {
        type: String,
        trim: true,
        required: true 
    },
    weight: {
        type: Number,
        trim: true,
        required: false
    },
    sets: {
        type: Number,
        trim: true,
        required: false
    },
    reps: {
        type: Number,
        trim: true,
        required: false
    },
    duration: {
        type: Number,
        trim: true,
        required: true
    }

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;