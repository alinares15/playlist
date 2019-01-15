/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["poison", "Come on Eileen", "Rob is my Hero", "Put your head on my shoulder", "Every little step of the way", "Lost in the Fire"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var artistnam = ["Bel Biv Devoe", "Dexy's Midnight Runners", "Rob Day", "Bobby Brown", "The Weeknd"];

var songLength = [261, 274, 2000, 209, 199];

var links = ['https://youtu.be/YejxyaFyUHc', 'https://youtu.be/ASwge9wc-eI', 'https://youtu.be/uvxagNIBVLU', 'https://youtu.be/ZGDGdRIxvd0?list=RDZGDGdRIxvd0'];


var images = ['https://images-na.ssl-images-amazon.com/images/I/61LSLIBWAwL.jpg', 'https://images.genius.com/7c63e499b5783dd3542feedfd20be468.1000x1000x1.jpg', 'https://assets.audiomack.com/mylaaa326/paul-anka-put-your-head-on-my-shoulder-1959-hq-audio-275-275-1516970609.jpg', '', 'https://tonedeaf.thebrag.com/wp-content/uploads/2019/01/weeknd-600x338.jpg'];

    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    songs.forEach(function(title){
        $("#songs").append("<h1>" + title + "</h1>");
    })

    songLength.forEach(function(seconds){
        $("#lenghts").append("<p>" + seconds + "</p>");
    })
    
    artistnam.forEach(function(artists){
        $("#artists").append("<strong>" + artists + "</strong>");
    })
    
    links.forEach(function(link){
        $("#links").append("<em>" + link + "</em>");
    })
    
    images.forEach(function(picture){
        $("#images").append("img src='" + picture + "'>");    
    }

    
function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    
    addSongInfo();
    
    
    
});

