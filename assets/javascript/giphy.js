$(function(){
    

    $('button').on('click', function() {
            var superheroes = $(this).data('superheroes');
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + superheroes + "&api_key=dc6zaTOxFJmzC&limit=10";
            $.ajax({
                    url: queryURL,
                    method: 'GET'
                })
                .done(function(response) {
                    console.log(queryURL);
                    console.log(response)
                    var results = response.data;
                    for (var i = 0; i < results.length; i++) {
                        var superheroesDiv = $('<div>');
                        var p = $('<p>').text("Rating: " + results[i].rating);
                        var superheroesImage = $('<img>');
                        superheroesImage.attr('src', results[i].images.fixed_height.url);
                        superheroesImage.attr('animated', results[i].images.fixed_height.url);
                        superheroesImage.attr('still', results[i].images.fixed_height_still.url);
                        superheroesImage.attr('status', "animated");
                        
                        superheroesImage.on("click",function(){
                            
                            if($(this).attr("status") == "animated"){
                                console.log("I'm animated");
                            
                                $(this).attr("status","still");
                                $(this).attr("src",$(this).attr("still"));
                                
                            }
                            
                            else{
                                $(this).attr("status", "animated");
                                $(this).attr("src",$(this).attr("animated"));   
                            }
                            
                        });
                        
                        superheroesDiv.append(p);
                        superheroesDiv.append(superheroesImage);
                        $('#gifsAppearHere').prepend(superheroesDiv);
                        }
                });



        });
        console.log("ran");
});