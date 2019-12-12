//Attempting to make dropdown view change to selection
// let selectExType = $(".selectExType");
// let cardio = $(".cardio");
// let resistance = $(".resistance");
// select.onchange = function() {
//     input.value = select.value;
// }

$("#complete-btn").on("click", function (event) {
    console.log("click works");

    const exerciseType = $("#dropdownMenu2").val().trim();
    const exerciseName = $("#exerciseInput").val().trim();
    const exerciseWeight = $("#weightInput").val().trim();
    const exerciseSets = $("#setsInput").val().trim();
    const exerciseReps = $("#repsInput").val().trim();
    const exerciseDuration = $("#durationInput").val().trim();
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
    event.preventDefault();

    const newWorkout = {
        exerciseType: exerciseType,
        exerciseName: exerciseName,
        weight: parseInt(exerciseWeight),
        sets: parseInt(exerciseSets),
        reps: parseInt(exerciseReps),
        duration: parseInt(exerciseDuration)
    }

    console.log(newWorkout);




    $.ajax({
        url: "/api/workout",
        method: "POST",
        header: { "Content-Type:": "application/json" },
        data: newWorkout
    }).then(function () {
        console.log("new workout added");

    });


  


    // Make the AJAX request to the API - GETs the JSON data at the queryURL.
    // The data then gets passed as an argument to the updatePage function
});