var fs = require("fs");
var Spotify = require("node-spotify-api");
var request = require("request");
var Keys = require("./keys.js");
var movie = require("./movie.js");
var Twitter = require('twitter');
var moment = require("moment");
var Tweet = require("./tweetReader.js");
var music = require("./music.js");


                        //Liri Program


//inputs
var instruction = process.argv[2];
var input = process.argv[3];

switch (instruction) {
//twitter search
    case "my-tweets":
    case "my-tweets":
    case "my-tweats":
    case "mah-tweets":
    case "me-tweet":
    case "tweets":
    case "tweats":
        Tweet.tweetLoad();
        break;
//music search
    case "music":
    case "spotify-this-song":
    case "spotify":
    case "spotify-this":
        music.spotifySearch(input);
        break;
//movie search
    case "omdb":
    case "movie-this":
    case "movie":
        if(input === undefined){
            movie.omdbSearch("Mr Nobody");
        }else{
            movie.omdbSearch(input);
        }
        break;
//Reads in random file and does what it says
    case "do-what-it-says":
    case "do-the-thing":
        fs.readFile("random.txt", "utf8", function(error, data) {
            if (error) {
                return console.log(error);
            }
                var dataArr = data.split(",");
            
                switch (dataArr[0]) {
                    case "my-tweets":
                    case "my-tweats":
                    case "tweets":
                        Tweet.tweetLoad();
                        break;
                    
                    case "spotify":
                    case "spotify-this-song":
                    case "spotify-this":
                        music.spotifySearch(dataArr[1]);
                        break;

                    case "omdb":
                    case "movie-this":
                    case "movie":
                        if(dataArr[1] === undefined){
                            movie.omdbSearch("Mr Nobody");
                        }else{
                            movie.omdbSearch(dataArr[1]);
                        }
                        break;

                    default:
                        console.log("There is an issuse in the random file.  Check that commands are spelled correctly and that the search is in quotation marks.")
                        break;
                }


        });
        break;
    
    default:
        console.log('Something went wrong. Availiable commands are "my-tweets", "spotify-this-song", "movie-this", and "do-what-it-says"');
        console.log("Please enter any search parameters inside quotation marks.");
        break;
}

