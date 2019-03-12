/* global $ */


function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    var songz = $("#songs").val();
    var artistname = $("#artists").val();
    var songLength = $("#lengths").val();
    var linkz = $("#links").val();
    var images = $("#images").val();
    
    songs.push(songz);
    artistname.push(artistname);
    songLength.push(songLength);
    linkz.push(linkz);
    images.push(images);
    
    $('#songs').empty();
    $('#artists').empty();
    $('#lengths').empty();
    $('#links').empty();
    $('#images').empty();

}


function addSongInfo(song){
    // BELOW write the code to add new items to each of the arrays.
   var songName = $('#song').val();
   var newlistitem = {
       song: songName,
       artistName: artistName,
       songLength: lengths,
       
   }
   playlist.push(newlistitem);
   playlist.push(newlistitem);
//.push
}

$("#add").click(function() {
    emptySongInfo();
    
    addSongInfo();
    
    
    
});

//playlist item then list then present them

var poison = {
    song: "Poison",
    artistName: "Bell Biv Devoe",
    songLength: 261,
    links: 'https://youtu.be/YejxyaFyUHc',
    image: "https://images-na.ssl-images-amazon.com/images/I/61LSLIBWAwL.jpg"
    };
    
var comeOnEileen = {
    song: "Come On Eileen",
    artistName: "Dexy's Midnight Runners",
    songLength: 274,
    links: "https://youtu.be/ASwge9wc-eI",
    image: "https://images.genius.com/7c63e499b5783dd3542feedfd20be468.1000x1000x1.jpg"
};

var paulAnka = {
    song: "Put Your Head on my Shoudler",
    artistName: "Paul Anka",
    songLength: 156,
    links: 'https://youtu.be/uvxagNIBVLU',
    image: 'https://assets.audiomack.com/mylaaa326/paul-anka-put-your-head-on-my-shoulder-1959-hq-audio-275-275-1516970609.jpg'
};

var bobbyBrown = {
    song: "Every Little Step of The Way",
    artistName: "Bobby Brown",
    songLength: 209,
    links: "https://youtu.be/P0FKzPfsxA4",
    image: "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F1c4b7079dcf62b5a837177eb112f6d71.600x600x1.jpg"
};

var playlist = [
    poison,
    comeOnEileen,
    paulAnka,
    bobbyBrown
    ];
    
playlist.forEach(function(play){
    $("#songs").append("<p>" + play.song + "</p>");
    $("#artists").append("<p>" + play.artistName + "</p>");
    $("#lengths").append("<p> " + play.songLength + "</p>");
    $("#links").append("<a href='" + play.links + "'> click </a>");
    $("#images").append("<img src=' " + play.image + "'>");
});