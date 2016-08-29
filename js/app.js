//"https://www.googleapis.com/youtube/v3/search"
//the endpoint

// //part: 'snippet'
// key: (your API key as a string)
// q: (your search term as a string)
// var youtube-link = 



$(function() {
    $("#search-term").submit(function(event) {
        event.preventDefault();
        var searchTerm = $("#query").val();
        $('#query').val(''); //calling it
        getRequest(searchTerm);
    });
});

function getRequest(searchTerm) {
    var params = {
        part: 'snippet',
        key: 'AIzaSyB0C85q-yECJMIwnvv39oSP24Qvw5ITjNY',
        q: searchTerm, 

    }

    $.getJSON('https://www.googleapis.com/youtube/v3/search', params, function(data) {
     var showResults = data.items; //why is data.items used??? how do i know if it's items, and not other key? which website do i use as a reference for this key in devtools? 
      console.log(data);
       // $.each(searchResult, function(index, value) {
       // 		//assign variable to youtube url to be assigned to youtube ID
       // 		var youtubeUrl = "https://www.youtube.com/watch?v=" + item.id.videoId;
       // 		//assign variable to picture of the video snippet 


       	
       // });
    });

};

// function showResults(picResults, linkResults) {
//    $('.result')
//     };
