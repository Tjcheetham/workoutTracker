function getExercises () {
    $.ajax({
        url: "/api/workout",
        method: "GET",

    }).then(function (result) {
        console.log(result);

        for (let i = 0; i < result.length; i++) {
            
            let date = moment(result[i].date).format('L');
            let name = result[i].exerciseName;
            let type = result[i].exerciseType;
            let weight = result[i].weight;
            let duration = result[i].duration;
            let sets = result[i].sets;
            let reps = result[i].reps;

            const newRow = $("<tr>").append(
                $("<td>").text(date),
                $("<td>").text(name),
                $("<td>").text(type),
                $("<td>").text(duration),
                $("<td>").text(weight),
                $("<td>").text(sets),
                $("<td>").text(reps)

            )

            $("#fitness-table > tbody").append(newRow);

           
            
        }

    });




}

getExercises();