function callYouTubeApi () {
    let queryUrl = "https://www.googleapis.com/youtube/v3/search?q=mojito&cocktail&recipe&part=snippet&type=video&&order=rating&videoEmbeddable=true&videoDefinition=high&key=AIzaSyAl9Bp8LbWiQeAUi0_6uRBLLhnBI6le7K4";

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        let responseData = response.data;
            console.log(responseData);
    });
}

callYouTubeApi();