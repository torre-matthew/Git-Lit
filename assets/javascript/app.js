function callYoutubeApi () {
    let cockTail = $("#drink-name-input").val().trim();
        console.log(cockTail);
    let youTubeURL = "https://www.googleapis.com/youtube/v3/search?q=How&to&make&a&" + cockTail + "&cocktail&part=snippet&type=video&order=relevance&videoEmbeddable=true&videoDefinition=high&key=AIzaSyAl9Bp8LbWiQeAUi0_6uRBLLhnBI6le7K4";
     
    $.ajax({
        url: youTubeURL,
        method: "GET"
    }).then(function(response){
        let youTubeApiResponse = response;
            console.log(youTubeApiResponse);

        let videoID = youTubeApiResponse.items[0].id.videoId;
        let videoURL = "https://www.youtube.com/embed/" + videoID; //Build embed URL from API response
            console.log(videoID);
            console.log(videoURL);
        // Add iframe to the page with youtube video when results comeback.
        let iframe = $("<iframe>")
            .addClass("embed-responsive-item")
            .attr("src", videoURL);
            
        $(".embed-responsive").append(iframe);
    });   
}

function callcocktailDbApi () {
    let cockTail = $("#drink-name-input").val().trim();
        console.log(cockTail);
    let cocktailDBURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cockTail;

    //Response from Cocktail DB
    $.ajax({
        url: cocktailDBURL,
        method: "GET"
    }).then(function(response){
        let cocktailDbApiResponse = response;
            console.log(cocktailDbApiResponse);


        let image = $("<img>")
                    .addClass("card-img-top")
                    .attr("src", cocktailDbApiResponse.drinks[0].strDrinkThumb)
                    .attr("alt", "Card Image Cap");

        let drinkName = $("<h3>")
                    .attr("id","drinkName")
                    .text(cocktailDbApiResponse.drinks[0].strDrink);

        $(".drink-image").append(image).append(drinkName);
    });
}

$("#add-drink-choices-btn").on("click", function (event) {
    event.preventDefault();
    callYoutubeApi();
    callcocktailDbApi();
});