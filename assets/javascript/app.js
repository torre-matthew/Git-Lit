// constructs the suggestion engine
var ingredients_suggestions = new Bloodhound ({
  datumTokenizer: Bloodhound.tokenizers.whitespace, 
  queryTokenizer: Bloodhound.tokenizers.whitespace, 
  local: ["151 proof rum","7-up","Absinthe","Absolut citron","Absolut Kurant","Absolut Peppar","Absolut Vodka",
          "Advocaat","Aejo rum","Aftershock","Agave syrup","Ale","Allspice","Almond Extract","Almond flavoring",
          "Almond","Amaretto","Angelica Root","Angostura Bitters","Anis","Anise","Anisette","Aperol","Apfelkorn",
          "Apple Brandy","Apple Cider","Apple Juice","Apple schnapps","Apple","Applejack","Apricot Brandy",
          "Apricot nectar","Apricot","Aquavit","Asafoetida","Anejo rum","Baby Plum Tomatoes","Bacardi Limon",
          "Bacardi","Bacon","Bailey's irish cream","Baileys irish cream","Banana liqueur","Banana rum","Banana syrup",
          "Banana","Barenjager","Basil","Beef bouillon","Beef Stock","Beer","Benedictine","Berries","Bitter lemon",
          "Bitters","Black Pepper","Black rum","Black Sambuca","Blackberries","Blackberry Brandy","Blackberry schnapps",
          "Blackcurrant cordial","Blackcurrant schnapps","Blackcurrant squash","Blended Whiskey","Blue Curacao","Blue Maui",
          "Blueberries","Blueberry schnapps","Bourbon","Bow Tie Pasta","Bramley Apples","Brandy","Bread","Brown Rice",
          "Brown Sugar","Butter, softened","Butter","Butterscotch schnapps","Cachaca","Calvados","Campari","Canadian whisky",
          "Candy","Cantaloupe","Caramel coloring","Carbonated soft drink","Carbonated water","Cardamom","Carrot","Caster Sugar",
          "Cayenne pepper","Celery salt","Celery","Chambord raspberry liqueur","Champagne","Cheese","Cherries","Cherry Brandy",
          "Cherry cola","Cherry Grenadine","Cherry Heering","Cherry juice","Cherry liqueur","Cherry","Chicken Breasts",
          "Chicken Stock","Chicken","Chilled Butter","Chinese Broccoli","Chocolate ice-cream","Chocolate liqueur",
          "Chocolate milk","Chocolate syrup","Chocolate","Chopped Garlic","Chopped Onion","Chopped Tomatoes","Cider",
          "Cinnamon schnapps","Cinnamon","Citrus vodka","Clamato juice","Clove","Cloves","Club Soda","Coca-Cola",
          "Cocktail Olive","Cocktail onion","Cocoa Powder","Coconut cream","Coconut liqueur","Coconut Milk","Coconut rum",
          "Coconut syrup","Coffee brandy","Coffee liqueur","Coffee","Coffeemate","Cognac","Cointreau","Cola","Cold Water",
          "Condensed milk","Coriander Leaves","Coriander","Corn Starch","Corn syrup","Corn Tortillas","Cornstarch","Corona",
          "Courgette","Cranberries","Cranberry Juice","Cranberry liqueur","Cranberry vodka","Cream of Coconut","Cream Sherry",
          "Cream soda","Cream","Creme de Almond","Creme De Banane","Creme de Cacao","Creme de Cassis","Creme de Noyaux",
          "Creme Fraiche","Crown Royal","Crystal light","Cubed Feta Cheese","Cucumber","Cumin powder","Cumin seed","Curacao",
          "Cynar","Daiquiri mix","Dark Chocolate","Dark Creme de Cacao","Dark Rum","Dark Soy Sauce","Demerara sugar",
          "Digestive Biscuits","Dijon Mustard","Doner Meat","Dr Pepper","Dr. Pepper","Drambuie","Dried Oregano","Dry Vermouth",
          "Dubonnet blanc","Dubonnet Rouge","Egg White","Egg Yolk","Egg","Eggnog","Eggs","Enchilada Sauce","English Mustard",
          "Erin Cream","Espresso","Everclear","Extra Virgin Olive Oil","Fanta","Farfalle","Fennel Seeds","Feta Cheese","Firewater",
          "Flaked Almonds","Flour","Food coloring","Forbidden Fruit","Frangelico","Free-range Egg, Beaten",
          "Free-range Eggs, Beaten","Fresca","Fresh Basil","Fresh Lemon Juice","Freshly Chopped Parsley","Fries","Fruit juice",
          "Fruit punch","Fruit","Galliano","Garlic Sauce","Garlic","Gatorade","Gin","Ginger Ale","Ginger beer","Ginger",
          "Glycerine","Godiva liqueur","Gold rum","Gold Tequila","Goldschlager","Gouda Cheese","Grain Alcohol","Grand Marnier",
          "Granulated Sugar","Grape juice","Grape soda","Grapefruit Juice","Grapes","Grated Cheese","Green Chartreuse",
          "Green Creme de Menthe","Green Ginger Wine","Green Olives","Green Red Lentils","Grenadine","Ground Almonds",
          "Ground Ginger","Guava juice","Guinness stout","Guinness","Half-and-half","Hawaiian punch","Hazelnut liqueur",
          "Heavy cream","Honey","Hooch","Hoopers Hooch","Hot Beef Stock","Hot Chocolate","Hot Damn","Hot Sauce","Hotsauce",
          "Hpnotiq","Ice-Cream","Ice","Iced tea","Irish cream","Irish Whiskey","Italian Seasoning","Jack Daniels","Jello",
          "Jelly","Jgermeister","Jim Beam","Johnnie Walker","Kahlua","Key Largo Schnapps","Kirschwasser","Kiwi liqueur","Kiwi",
          "Kool-Aid","Kummel","Lager","Lasagne Sheets","Lasagne","Lean Minced Beef","Lemon Juice","Lemon Peel","Lemon soda",
          "Lemon vodka","Lemon-lime soda","Lemon-lime","Lemon","Lemonade","Lentils","Lettuce","Licorice Root","Light Cream",
          "Light Rum","Lillet","Lime juice cordial","Lime Juice","Lime liqueur","Lime peel","Lime vodka","Lime","Limeade",
          "Madeira","Malibu Rum","Malt Vinegar","Mandarin","Mandarine napoleon","Mango","Maple syrup","Maraschino cherry juice",
          "Maraschino Cherry","Maraschino Liqueur","Margarita mix","Marjoram leaves","Marshmallows","Maui","Melon liqueur",
          "Melon vodka","Mezcal","Midori melon liqueur","Midori","Milk","Minced Beef","Minced Garlic","Mint syrup","Mint",
          "Mountain Dew","Mozzarella Balls","Mozzarella","Mushroom","Mushrooms","Mustard","Nutmeg","Nuts","Olive Oil","Olive",
          "Onion","Onions","Orange Bitters","Orange Curacao","Orange Juice","Orange liqueur","Orange Peel","Orange rum",
          "Orange Soda","Orange spiral","Orange vodka","Orange","Oregano","Oreo cookie","Orgeat Syrup","Ouzo","Oyster Sauce",
          "Papaya juice","Papaya","Parfait d'amour","Parmesan Cheese","Parmesan","Parmigiano-Reggiano","Parsley",
          "Passion fruit juice","Passion fruit syrup","Passoa","Peach brandy","Peach juice","Peach liqueur","Peach Nectar",
          "Peach Schnapps","Peach Vodka","Peach","Peachtree schnapps","Peanut Oil","Peas","Penne Rigate","Pepper",
          "Peppermint extract","Peppermint Schnapps","Pepsi Cola","Pernod","Peychaud bitters","Pina colada mix",
          "Pineapple Juice","Pineapple rum","Pineapple vodka","Pineapple-orange-banana juice","Pineapple","Pink lemonade",
          "Pisang Ambon","Pisco","Pina colada","Plain Chocolate","Plain Flour","Plum Tomatoes","Plums","Port","Potato",
          "Potatoes","Powdered Sugar","Prawns","Purple passion","Raisins","Raspberry cordial","Raspberry Jam","Raspberry juice",
          "Raspberry liqueur","Raspberry schnapps","Raspberry syrup","Raspberry Vodka","Raw King Prawns","Red Chile Flakes",
          "Red Chili Flakes","Red Hot Chili Flakes","Red Lentils","Red Wine","Rhubarb","Ricard","Rice Stick Noodles","Rock Salt",
          "Root beer schnapps","Root beer","Roses sweetened lime juice","Rosewater","Rum","Rumple Minze","Rye whiskey","Sake",
          "Salmon","Salt","Sambuca","Sarsaparilla","Schnapps","Schweppes Lemon","Schweppes Russchian","Schweppes Russchiani",
          "Scotch","Sesame Seed","Sherbet","Sherry","Shredded Cheese","Shredded Monterey Jack Cheese","Sirup of roses","Sloe Gin",
          "Soda Water","Sour Apple Pucker","Sour Mix","Southern Comfort","Soy Milk","Soy Sauce","Soya Milk","Soya Sauce",
          "Spaghetti","Spiced Rum","Spinach","Sprite","Squeezed Orange","Squirt","Stir-fry Vegetables","Strawberries",
          "Strawberry juice","Strawberry liqueur","Strawberry Schnapps","Strawberry syrup","Sugar Syrup","Sugar","Sunny delight",
          "Surge","Swedish punch","Sweet and Sour","Sweet Cream","Sweet Vermouth","Tabasco Sauce","Tang","Tawny port","Tea",
          "Tennessee whiskey","Tequila rose","Tequila","Tia Maria","Tinned Tuna","Tomato Juice","Tomato Puree","Tomato",
          "Tomatoe","Tomatoes","Tonic Water","Triple Sec","Tropicana","Tuaca","Tuna","Vanilla extract","Vanilla Ice-Cream",
          "Vanilla liqueur","Vanilla schnapps","Vanilla syrup","Vanilla vodka","Vanilla","Vegan Butter","Vermouth","Vinegar",
          "Vodka","Water","Watermelon schnapps","Whipped Cream","Whipping Cream","Whiskey","Whisky","White chocolate liqueur",
          "White Creme de Menthe","White grape juice","White port","White Rum","White Vinegar","White Wine","Wild Turkey",
          "Wildberry schnapps","Wine","Worcestershire Sauce","Wormwood","Yeast","Yellow Chartreuse","Yoghurt","Yukon Jack",
          "Zima","Zucchini",]
});

    $('#ingredient-input').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'ingredients',
        source: ingredients_suggestions   // Bloodhound instance is passed as the source
});

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
