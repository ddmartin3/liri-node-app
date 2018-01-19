var fs = require("fs");
var request = require("request");
var key = require("./keys.js");
var Twitter = require('twitter');


module.exports = {
    omdbSearch: function(input){
        var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=40e9cece";  
        //test the query
        console.log(queryUrl);      
        request(queryUrl, function(error, response, body) {
            // If the request is successful
            if (!error && response.statusCode === 200) {
                //output the following information:
                // Title of the movie
                console.log("movie Info for " + JSON.parse(body).Title + ":")
                console.log("Title: " + JSON.parse(body).Title);
                // Year of release
                console.log("Release Year: " + JSON.parse(body).Year);
                // IMBD rating
                console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value)
                // Rotten Tomatoes Rating
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value)
                // Production Country
                console.log("Prodcuced in " + JSON.parse(body).Country);
                // Language of the MOvie
                console.log("Released in " + JSON.parse(body).Language);
                // Movie plot
                console.log("Plot: " + JSON.parse(body).Plot);
                // Actors in the Movie
                console.log("Staring: " + JSON.parse(body).Actors);
                // default to "Mr. Nobody"
                // Use "40e9cece" as the api key
            }
        });
    }
};
