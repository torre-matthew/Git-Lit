// constructs the suggestion engine for searching by cocktail INGREDIENT
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
//initializes typeahead UI
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

// constructs the suggestion engine for searching by cocktail NAME
var cocktail_suggestions = new Bloodhound ({
    datumTokenizer: Bloodhound.tokenizers.whitespace, 
    queryTokenizer: Bloodhound.tokenizers.whitespace, 
    local: ["A Day at the Beach","A Furlong Too Late","A Gilligan's Island","A midsummernight dream","A Night In Old Mandalay",
            "A Piece of Ass","A Splash of Nash","A True Amaretto Sour","A. J.", "A.D.M. (After Dinner Mint)","A1","Abbey Cocktail",
            "Abbey Martini","ABC","Abilene","Absinthe #2","Absolut Evergreen","Absolut limousine","Absolut Sex","Absolut Stress #2",
            "Absolut Summertime","Absolutely Cranberry Smash","Absolutely Fabulous","Absolutly Screwed Up","Acapulco","Ace",
            "ACID","Adam","Adam & Eve","Adam Bomb","Adam Sunrise","Addington","Addison","Addison Special","Adios Amigos Cocktail",
            "Adonis Cocktail","Affair","Affinity","After Dinner Cocktail","After Five","After sex","After Supper Cocktail",
            "Afterglow","Afternoon","Alabama Slammer","Alaska Cocktail","Alexander","Alfie Cocktail","Algonquin","Alice Cocktail",
            "Alice in Wonderland","Allegheny","Allies Cocktail","Almeria","Almond Chocolate Coffee","Almond Joy","Aloha Fruit punch",
            "Amaretto And Cream","Amaretto Liqueur","Amaretto Mist","Amaretto Rose","Amaretto Shake","Amaretto Sour","Amaretto Stinger",
            "Amaretto Stone Sour","Amaretto Stone Sour #3","Amaretto Sunrise","Amaretto Sunset","Amaretto Sweet & Sour","Amaretto Tea",
            "Americano","Angel Face","Angelica Liqueur","Apello","Apple Berry Smoothie","Apple Cider Punch #1","Apple Grande",
            "Apple Karate","Apple Pie with A Crust","Apple Slammer","Applecar","Applejack","Apricot Lady","Apricot punch","Archbishop",
            "Arctic Fish","Arctic Mouthwash","Arise My Love","Arizona Antifreeze","Arizona Stingers","Arizona Twister","Army special",
            "Arthur Tompkins","Artillery","Artillery Punch","AT&T","Atlantic Sun","Atomic Lokade","Auburn Headbanger","Autodafé",
            "Avalanche","Avalon","Aviation","Aztec Punch","B-52","B-53","Baby Eskimo","Baby Guinness","Bacardi Cocktail",
            "Bahama Mama","Bailey's Dream Shake","Balmoral","Banana Cantaloupe Smoothie","Banana Daiquiri","Banana Milk Shake",
            "Banana Strawberry Shake","Banana Strawberry Shake Daiquiri-type","Barracuda","Belgian Blue","Bellini","Bellini Martini",
            "Bermuda Highball","Berry Deadly","Between The Sheets","Bible Belt","Big Red","Bijou","Black & Tan","Black and Brown",
            "Black Forest Shake","Black Russian","Blackthorn","Bleeding Surgeon","Blind Russian","Bloody Maria","Bloody Mary",
            "Blue Hurricane","Blue Lagoon","Blue Margarita","Blue Mountain","Bluebird","Bob Marley","Bobby Burns Cocktail",
            "Bombay Cassis","Boomerang","Boozy Snickers Milkshake","Bora Bora","Boston Sidecar","Boston Sour","Boulevardier",
            "Bourbon Sling","Bourbon Sour","Boxcar","Brain Fart","Brainteaser","Bramble","Brandon and Will's Coke Float",
            "Brandy Alexander","Brandy Cobbler","Brandy Flip","Brandy Sour","Brave Bull Shooter","Brigadier","Bruce's Puce",
            "Bruised Heart","Bubble Gum","Buccaneer","Bumble Bee #1","Butter Baby","Cafe Savoy","Caipirinha","Caipirissima",
            "California Lemonade","California Root Beer","Campari Beer","Caribbean Boilermaker","Caribbean Orange Liqueur","Casa Blanca",
            "Casino","Casino Royale","Castillian Hot Chocolate","Champagne Cocktail","Cherry Electric Lemonade","Cherry Rum",
            "Chicago Fizz","Chocolate Beverage","Chocolate Black Russian","Chocolate Drink","Chocolate Milk","Chocolate Monkey",
            "Citrus Coke","City Slicker","Classic Old-Fashioned","Clove Cocktail","Clover Club","Coffee Liqueur","Coffee-Vodka",
            "Coke and Drops","Corn n Oil","Corpse Reviver #2","Cosmopolitan","Cosmopolitan Martini","Cranberry Cordial",
            "Cranberry Punch","Cream Soda","Creme de Menthe","Cuba Libra","Cuba Libre","Daiquiri","Damned if you do","Danbooka",
            "Dark and Stormy","Dark Caipirinha","Darkwood Sling","Derby","Diesel","Dirty Martini","Dirty Nipple","Downshift",
            "Dragonfly","Drinking Chocolate","Dry Rob Roy","Dubonnet Cocktail","Duchamp's Punch","Egg Cream","Egg Nog #4",
            "Egg Nog - Healthy","Egg-Nog - Classic Cooked","Empellón Cocina's Fat-Washed Mezcal","English Highball",
            "English Rose Cocktail","Espresso Martini","Fahrenheit 5000","Flaming Dr. Pepper","Flaming Lamborghini",
            "Flander's Flake-Out","Flying Dutchman","Flying Scotchman","Foxy Lady","Frappé","Freddy Kruger","French 75",
            "French Connection","French Martini","French Negroni","Frisco Sour","Frozen Daiquiri","Frozen Mint Daiquiri",
            "Frozen Pineapple Daiquiri","Fruit Cooler","Fruit Flip-Flop","Fruit Shake","Fuzzy Asshole","Gagliardo","Gentleman's Club",
            "GG","Gideon's Green Dinosaur","Gimlet","Gin And Tonic","Gin Cooler","Gin Daisy","Gin Fizz","Gin Rickey","Gin Sling",
            "Gin Smash","Gin Sour","Gin Squirt","Gin Swizzle","Gin Toddy","Girl From Ipanema","Gluehwein","Godchild","Godfather",
            "Godmother","Golden dream","Grand Blue","Grape lemon pineapple Smoothie","Grass Skirt","Grasshopper","Green Goblin",
            "Greyhound","Grim Reaper","Grizzly Bear","H.D.","Happy Skipper","Harvey Wallbanger","Havana Cocktail","Hawaiian Cocktail",
            "Hemingway Special","Herbal flame","Highland Fling Cocktail","Holloween Punch","Homemade Kahlua","Horse's Neck",
            "Hot Chocolate to Die for","Hot Creamy Bush","Hunter's Moon","Ice Pick #1","Iced Coffee","Iced Coffee Fillip",
            "Imperial Cocktail","Imperial Fizz","Ipamena","Irish Coffee","Irish Cream","Irish Curdling Cow","Irish Russian",
            "Irish Spring","Jack Rose Cocktail","Jack's Vanilla Coke","Jackhammer","Jam Donut","Jamaica Kiss","Jamaican Coffee",
            "Japanese Fizz","Jello shots","Jelly Bean","Jewel Of The Nile","Jitterbug","John Collins","Just a Moonmint",
            "Kamikaze","Karsk","Kentucky B And B","Kentucky Colonel","Kill the cold Smoothie","Kioki Coffee","Kir","Kir Royale",
            "Kiss me Quick","Kiwi Lemon","Kiwi Papaya Smoothie","Kool First Aid","Kool-Aid Shot","Kool-Aid Slammer","Kurant Tea",
            "Lady Love Fizz","Lassi - A South Indian Drink","Lassi - Mango","Lassi - Sweet","Lassi Khara","Lassi Raita","Lemon Drop",
            "Lemon Shot","Lemouroudji","Limeade","Limona Corona","Loch Lomond","London Town","Lone Tree Cocktail","Lone Tree Cooler",
            "Long Island Iced Tea","Long Island Tea","Long vodka","Lord And Lady","Lunch Box","Mai Tai","Malibu Twister",
            "Mango Orange Smoothie","Manhattan","Margarita","Martinez 2","Martinez Cocktail","Martini","Mary Pickford","Masala Chai",
            "Melya","Miami Vice","Microwave Hot Cocoa","Midnight Cowboy","Midnight Manx","Midnight Mint","Mimosa","Mint Julep",
            "Mississippi Planters Punch","Mocha-Berry","Mojito","Mojito #3","Monkey Gland","Monkey Wrench","Moranguito","Moscow Mule",
            "Mother's Milk","Mudslinger","Mulled Wine","National Aquarium","Negroni","New York Lemonade","New York Sour",
            "Nuked Hot Chocolate","Nutty Irishman","Oatmeal Cookie","Old Fashioned","Old Pal","Orange Crush","Orange Oasis",
            "Orange Push-up","Orange Scented Hot Chocolate","Orange Whip","Orangeade","Oreo Mudslide","Orgasm",
            "Owen's Grandmother's Revenge","Paloma","Paradise","Pegu Club","Penicillin","Pina Colada","Pineapple Gingerale Smoothie",
            "Pink Gin","Pink Lady","Pink Panty Pulldowns","Pink Penocha","Pisco Sour","Planter's Punch","Popped cherry",
            "Poppy Cocktail","Port And Starboard","Port Wine Cocktail","Port Wine Flip","Porto flip","Pysch Vitamin Light",
            "Quaker's Cocktail","Quarter Deck Cocktail","Queen Bee","Queen Charlotte","Queen Elizabeth","Quentin","Quick F**K",
            "Quick-sand","Radioactive Long Island Iced Tea","Radler","Rail Splitter","Raspberry Cooler","Red Snapper","Rose",
            "Rosemary Blue","Royal Bitch","Royal Fizz","Royal Flush","Royal Gin Fizz","Ruby Tuesday","Rum Cobbler","Rum Cooler",
            "Rum Milk Punch","Rum Old-fashioned","Rum Punch","Rum Runner","Rum Screwdriver","Rum Sour","Rum Toddy","Russian Spring Punch",
            "Rusty Nail","Salted Toffee Martini","Salty Dog","San Francisco","Sangria #1","Sangria - The World's Best","Sazerac",
            "Scooter","Scotch Cobbler","Scotch Sour","Scottish Highland Liqueur","Screaming Orgasm","Screwdriver","Sea breeze",
            "Sex on the Beach","Shanghai Cocktail","Shark Attack","Sherry Eggnog","Sherry Flip","Shot-gun","Sidecar","Sidecar Cocktail",
            "Singapore Sling","Sloe Gin Cocktail","Smut","Snake Bite (UK)","Snakebite and Black","Snowball","Sol Y Sombra",
            "Space Odyssey","Spanish chocolate","Spiced Peach Punch","Spiking coffee","Spritz","Stinger","Stone Sour",
            "Strawberry Daiquiri","Strawberry Lemonade","Strawberry Margarita","Strawberry Shivers","Sunny Holiday Punch",
            "Surf City Lifesaver","Swedish Coffee","Sweet Bananas","Sweet Sangria","Sweet Tooth","Talos Coffee","Tennesee Mud",
            "Tequila Fizz","Tequila Sour","Tequila Sunrise","Tequila Surprise","Texas Rattlesnake","Texas Sling","Thai Coffee",
            "Thai Iced Coffee","Thai Iced Tea","The Evil Blue Thing","The Jimmy Conway","The Last Word","The Laverstoke","Thriller",
            "Tia-Maria","Tipperary","Tom Collins","Tomato Tang","Tommy's Margarita","Turf Cocktail","Turkeyball","Tuxedo Cocktail",
            "Valencia Cocktail","Vampiro","Van Vleet","Vermouth Cassis","Vesper","Vesuvio","Veteran","Victor","Victory Collins",
            "Vodka And Tonic","Vodka Fizz","Vodka Martini","Vodka Russian","Waikiki Beachcomber","Whiskey Sour","Whisky Mac",
            "White Lady","White Russian","Whitecap Margarita","Wine Cooler","Wine Punch","Yellow Bird","Yoghurt Cooler","Zambeer",
            "Zenmeister","Ziemes Martini Apfelsaft","Zima Blaster","Zimadori Zinger","Zinger","Zipperhead","Zippy's Revenge",
            "Zizi Coin-coin","Zoksel","Zombie","Zorbatini","Zorro"]
    });
    //initializes typeahead UI
        $('#drink-name-input').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        },
        {
            name: 'cocktails',
            source: cocktail_suggestions   // Bloodhound instance is passed as the source
    });