

$("#add-drink-choices-btn").on("click", function (event) {
    event.preventDefault();

    let cockTail = $("#drink-name-input").val().trim();
        console.log(cockTail);


    let queryUrlSearch = "https://www.googleapis.com/youtube/v3/search?q=" + cockTail + "&cocktail&drink&recipe&part=snippet&type=video&&order=rating&videoEmbeddable=true&videoDefinition=high&key=AIzaSyAl9Bp8LbWiQeAUi0_6uRBLLhnBI6le7K4";

    $.ajax({
        url: queryUrlSearch,
        method: "GET"
    }).then(function(response){
        let responseDataSearch = response;
            console.log(responseDataSearch);

        let videoID = responseDataSearch.items[0].id.videoId;
        let videoURL = "https://www.youtube.com/embed/" + videoID;
            console.log(videoID);
            console.log(videoURL);
        // Add iframe to the page with youtube video when results comeback.
        let iframe = $("<iframe>")
            .addClass("embed-responsive-item")
            .attr("src", videoURL);
            
        $(".embed-responsive").append(iframe);
    });

        


    

});