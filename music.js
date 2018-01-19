var fs = require("fs");
var request = require("request");
var Spotify = require("node-spotify-api");


module.exports = {
    spotifySearch: function(input){
        var spotify = new Spotify({
            id: "04bc89ec723049d5825358a5ede60a2d",
            secret: "933d36ef11414b12af015eff04dcc437"
        });
        //Input is process.argv[3]
        spotify.search({ type: 'track', query: input })
        .then(function(data) {
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            fs.appendFileSync('log.txt', data.tracks.items[0].artists[0].name);
            console.log("Song Title: " + data.tracks.items[0].name); 
            fs.appendFileSync('log.txt', data.tracks.items[0].name);
            console.log("Song Preview: " + data.tracks.items[0].preview_url);
            fs.appendFileSync('log.txt', data.tracks.items[0].preview_url);
            console.log("Album: " + data.tracks.items[0].album.name);
            fs.appendFileSync('log.txt', data.tracks.items[0].album.name);
        })
        .catch(function(err) {
            console.log("Spotify stores no song by that name, so have some Ace of Base instead.");
            spotify.search({ type: 'track', query: "The Sign, Ace of Base" })
                    .then(function(data) {
                        console.log("Artist: " + data.tracks.items[0].artists[0].name);
                        fs.appendFileSync('log.txt', data.tracks.items[0].artists[0].name);
                        console.log("Song Title: " + data.tracks.items[0].name); 
                        fs.appendFileSync('log.txt', data.tracks.items[0].name);
                        console.log("Song Preview: " + data.tracks.items[0].preview_url);
                        fs.appendFileSync('log.txt', data.tracks.items[0].preview_url);
                        console.log("Album: " + data.tracks.items[0].album.name);
                        fs.appendFileSync('log.txt', data.tracks.items[0].album.name);
                    });
        });
    }
};
