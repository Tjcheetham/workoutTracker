const exerciseType = $("#dropdownMenu2").val().trim();
const exerciseName = $("#exerciseInput").val().trim();
const exerciseWeight = $("#weightInput").val().trim();
const exerciseSets = $("#setsInput").val().trim();
const exerciseReps = $("#repsInput").val().trim();
const exerciseDuration = $("#durationInput").val().trim();

$("#complete-btn").on("click", function(event){
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
    event.preventDefault();
  
    // Empty the region associated with the articles
    clear();
  
    // Build the query URL for the ajax request to the NYT API
    var queryURL = buildQueryURL();
  
    // Make the AJAX request to the API - GETs the JSON data at the queryURL.
    // The data then gets passed as an argument to the updatePage function
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(updatePage);
});