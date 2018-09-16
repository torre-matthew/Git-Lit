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
            $(".drink-image").append(drinkName).append(image);

        let ingredient = [cocktailDbApiResponse.drinks[0].strIngredient1,
                            cocktailDbApiResponse.drinks[0].strIngredient2,
                            cocktailDbApiResponse.drinks[0].strIngredient3,
                            cocktailDbApiResponse.drinks[0].strIngredient4,
                            cocktailDbApiResponse.drinks[0].strIngredient5,
                            cocktailDbApiResponse.drinks[0].strIngredient6,
                            cocktailDbApiResponse.drinks[0].strIngredient7,
                            cocktailDbApiResponse.drinks[0].strIngredient8,
                            cocktailDbApiResponse.drinks[0].strIngredient9,
                            cocktailDbApiResponse.drinks[0].strIngredient10,
                            cocktailDbApiResponse.drinks[0].strIngredient11,
                            cocktailDbApiResponse.drinks[0].strIngredient12,
                            cocktailDbApiResponse.drinks[0].strIngredient13,
                            cocktailDbApiResponse.drinks[0].strIngredient14,
                            cocktailDbApiResponse.drinks[0].strIngredient15];

        let measurements = [cocktailDbApiResponse.drinks[0].strMeasure1,
                            cocktailDbApiResponse.drinks[0].strMeasure2,
                            cocktailDbApiResponse.drinks[0].strMeasure3,
                            cocktailDbApiResponse.drinks[0].strMeasure4,
                            cocktailDbApiResponse.drinks[0].strMeasure5,
                            cocktailDbApiResponse.drinks[0].strMeasure6,
                            cocktailDbApiResponse.drinks[0].strMeasure7,
                            cocktailDbApiResponse.drinks[0].strMeasure8,
                            cocktailDbApiResponse.drinks[0].strMeasure9,
                            cocktailDbApiResponse.drinks[0].strMeasure10,
                            cocktailDbApiResponse.drinks[0].strMeasure11,
                            cocktailDbApiResponse.drinks[0].strMeasure12,
                            cocktailDbApiResponse.drinks[0].strMeasure13,
                            cocktailDbApiResponse.drinks[0].strMeasure14,
                            cocktailDbApiResponse.drinks[0].strMeasure15];
//Run through the array of ingredients and measurments
            ingredientsLoop: for (let i = 0; i < ingredient.length; i++) {
                    console.log (measurements[i] + ingredient[i]);
    //Build list items for ingredients
            let listItem = $("<li>").text(measurements[i] + ingredient[i]);
    //The cocktail DB Api returns 15 ingredient strings but it's rare that a cocktail has that many ingredients. This if statement will terminate the loop after the last ingredient so that we only display the ingredients available
                if (ingredient[i] != "") {
                    $("#ingredientList").append(listItem);
                }else {
                    break ingredientsLoop;
                }
            }
        
        let instructionP = $("<p>")
                                .attr("id", "instructions")
                                .text(cocktailDbApiResponse.drinks[0].strInstructions)

            $(".inst").append(instructionP);
    });
}

//When the form is submitted, call both api functions and place things on the page as necessary.
$("#add-drink-choices-btn").on("click", function (event) {
    event.preventDefault();
    
    callYoutubeApi();
    callcocktailDbApi();
//On subsequent form submissions, clear values so that we don't have images stacking.
    $(".drink-image").empty();
//On subsequent searches clear out the previous youtube video otherwise you can have two videos playing at once
    $(".embed-responsive").empty();
//On subsequent form submissions, clear values so that we don't have ingredients stacking.
    $("#ingredientList").empty();
//On subsequent form submissions, clear instruction values.
    $(".inst").empty();
});


//UCaDY8WjYWy36bnt0RVzSklw