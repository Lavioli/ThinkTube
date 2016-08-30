//the endpoint: "https://www.googleapis.com/youtube/v3/search"

/*part: 'snippet'
key: (your API key as a string)
q: (your search term as a string)
*/


//when search-button event handler is clicked:
$(function() {
    $("#search-term").submit(function(event) {
        event.preventDefault();
        var searchTerm = $("#query").val(); //takes text input from the search box and converts to a value
        $('#query').val(''); //removing value that is already in the search box
        getRequest(searchTerm); //run getRequest function to send API request (see below);
    });
});

function getRequest(searchTerm) {
    var params = {
            part: 'snippet',
            key: 'AIzaSyB0C85q-yECJMIwnvv39oSP24Qvw5ITjNY',
            q: searchTerm //the value obtained from the search box
        }
        //getRequest function executes and sends params object via AJAX and receives response as JSON object
    $.getJSON('https://www.googleapis.com/youtube/v3/search', params, function(data) {

        //the callback function takes in the received object and extracts the target value, in this case, the urls' are 
        //appended to the #video-url as a clickable image.
        var showResults = data.items;
        $.each(showResults, function(index, x) {
            var youtubeUrl = "https://www.youtube.com/watch?v=" + x.id.videoId;
            var youtubeTN = x.snippet.thumbnails.medium.url;
            $('#video-url').append("<a href='" + youtubeUrl + "'>" + "<img src='" + youtubeTN + "'>" + "</a>");
            // $('#picture-url').append("<img src='" + youtubeTN + "'>");
        });
    });

};

/*function showResults(picResults, linkResults) {
   $('.result')
    };
*/
