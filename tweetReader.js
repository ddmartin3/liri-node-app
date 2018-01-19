        
var fs = require("fs");
var request = require("request");
var Keys = require("./keys.js");
var movie = require("./movie.js");
var Twitter = require('twitter');
var moment = require("moment");


//show last twenty tweets and when they were created in the terminal:


module.exports = {
    tweetLoad: function() {
        var client = new Twitter(Keys);
        var params = {techDarwood: 'nodejs'};
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
                for (let i = 0; i < tweets.length; i++) {
                    var twitterTime = tweets[i].created_at;
                    console.log(twitterTime);
                    console.log(tweets[i].text);
                    console.log(" ");
                }
            } else {
                throw error
            }
        });
    }
    
};
        
    


