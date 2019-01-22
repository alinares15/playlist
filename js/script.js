/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Poison", "Come on Eileen", "Put your head on my shoulder", "Every little step of the way"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var artistnam = ["Bel Biv Devoe", "Dexy's Midnight Runners", "Frank Sinatra", "Bobby Brown"];

var songLength = [261, 274, 2000, 209];

var links = ['https://youtu.be/YejxyaFyUHc', 'https://youtu.be/ASwge9wc-eI', 'https://youtu.be/uvxagNIBVLU', 'https://youtu.be/P0FKzPfsxA4'];


var images = ['https://images-na.ssl-images-amazon.com/images/I/61LSLIBWAwL.jpg', 'https://images.genius.com/7c63e499b5783dd3542feedfd20be468.1000x1000x1.jpg', 'https://assets.audiomack.com/mylaaa326/paul-anka-put-your-head-on-my-shoulder-1959-hq-audio-275-275-1516970609.jpg'];

    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    songs.forEach(function(title){
        $("#songs").append("<p>" + title + "</p>");
    });

    songLength.forEach(function(seconds){
        $("#lengths").append("<p>" + seconds + "</p>");
    });
    
    artistnam.forEach(function(artists){
        $("#artists").append("<p>" + artists + "</p>");
    });
    
    links.forEach(function(link){
        $("#links").append("<a href =" + link + ">" + "Listen" + "</a>");
    });
    
    images.forEach(function(picture){
        $("#images").append("<img src='" + picture + "'>");    
    });

    
function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    var songz = $("#songs").val();
    var artistname = $("#artists").val();
    var songLength = $("#lengths").val();
    var linkz = $("#links").val();
    var images = $("#images").val();
    
    songs.push(songz);
    artistnam.push(artistnam);
    songLength.push(songLength);
    linkz.push(linkz);
    images.push(images);
    
    $('#songs').empty();
    $('#artists').empty();
    $('#lengths').empty();
    $('#links').empty();
    $('#images').empty();

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.

//.push
}

$("#add").click(function() {
    emptySongInfo();
    
    addSongInfo();
    
    
    
});

