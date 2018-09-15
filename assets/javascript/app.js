//THis function handles the youtube api response
function callYoutubeApi () {
    let cockTail = $("#drink-name-input").val().trim();
        console.log(cockTail);
    let youTubeURL = "https://www.googleapis.com/youtube/v3/search?q=" + cockTail + "&part=snippet&channelId=UCaDY8WjYWy36bnt0RVzSklw&type=video&order=relevance&videoEmbeddable=true&key=AIzaSyAl9Bp8LbWiQeAUi0_6uRBLLhnBI6le7K4";

// Get Response from the Youtube API
    $.ajax({
        url: youTubeURL,
        method: "GET"
    }).then(function(response){
        let youTubeApiResponse = response;
            console.log(youTubeApiResponse);
//Capture the video ID from api as it will be needed to build the appropriate video URL.
        let videoID = youTubeApiResponse.items[0].id.videoId;
//Build embed URL from API response
        let videoURL = "https://www.youtube.com/embed/" + videoID; 
            console.log(videoID);
            console.log(videoURL);

// Build iframe html
        let iframe = $("<iframe>")
            .addClass("embed-responsive-item")
            .attr("src", videoURL);
//Add the iframe to the page.
        $(".embed-responsive").append(iframe);
    });   
}
//This function handles the cocktail db API
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

//Build the image html
        let image = $("<img>")
                    .addClass("card-img-top")
                    .attr("src", cocktailDbApiResponse.drinks[0].strDrinkThumb)
                    .attr("alt", "Card Image Cap");

//Build cocktail name html
        let drinkName = $("<h3>")
                    .attr("id","drinkName")
                    .text(cocktailDbApiResponse.drinks[0].strDrink);

//Add the cocktail image and name to the page
        $(".drink-image").append(image).append(drinkName);
    });
}

//When the form is submitted, call both api functions and place things on the page as necessary.
$("#add-drink-choices-btn").on("click", function (event) {
    event.preventDefault();
    
    callYoutubeApi();
    callcocktailDbApi();
//On subsequent form submissions, clear values so that we don't have images stacking.
    $(".drink-image").empty();
});


//UCaDY8WjYWy36bnt0RVzSklw