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
        var showResults = data.items;
        $.each(showResults, function(index, x) {

        // $("#search-results").html("<img src='" + youtubeTN + "'>");

        var youtubeTN = x.snippet.thumbnails.medium.url;
        console.log(youtubeTN);



        });
    });

};

// function showResults(picResults, linkResults) {
//    $('.result')
//     };
