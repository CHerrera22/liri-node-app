//Hey, LIRI!

require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var request = require("request");
var moment = require("moment");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//Tell LIRI what you want to do
//Make it so LIRI can take in one of the following commands:
//* `concert-this`
//* `spotify-this-song`
//* `movie-this`
//* `do-what-it-says`

function askLiri(command, value) {
    switch (command) {

        case "concert-this":
            searchBandsAPI(artist);
            break;
    
        case "spotify-this-song":
            searchSpotifyAPI(song);
            break;
    
        case "movie-this":
            searchOmdbApi(movie);
            break;
    
        default:
        console.log("Please enter one of the following commands: concert-this, spotify-this-song, or movie-this.");
            break;
    };

//concert-this, BandsInTown
function searchBandsAPI(artist){
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    request(queryUrl, function(error, response, body) {
    },

//spotify-this-song, Spotify
function searchSpotifyAPI(song) {
    if (song === undefined) {
        song = "The Sign";
    }
    spotify.search(
        {
            type: "song",
            query: song
        },
        function (err, data) {
            if (err) {
                console.log("Oops! There was an error. Sorry, dude.");
                return;
            }

//movie-this, OMDB
var omdb = function(searchOmdbApi){
    if (searchOmdbApi === undefined){
        searchOmdbApi = "Mr. Nobody";
    }
};

//do-what-it-says, read random.txt
     //I got stuck on the following:
        //case "do-what-it-says":
            //searchReadRandom(something goes here, but idk what. I just know I need a function that will read random.txt and "It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.")
