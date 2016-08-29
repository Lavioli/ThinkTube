//"https://www.googleapis.com/youtube/v3/search"
//the endpoint

// //part: 'snippet'
// key: (your API key as a string)
// q: (your search term as a string)

$(function(){
	$("#search-term").submit(function(event){
		event.preventDefault(); 
		var search = $("#query").val();
		getRequest(searchTerm);
	})


});

function getRequest(searchTerm){
	var param = {
		part:'snippet', 
		key: 'AIzaSyB0C85q-yECJMIwnvv39oSP24Qvw5ITjNY', 
		q: 'searchTerm' 
	}

url= 'https://www.googleapis.com/youtube/v3/search';
$.getJSON(url, param, function(data){
    showResults(data.Search);
  });

};

function showResults (results) {
	var HTML = "";
	$.each(results, function(index, value) {
		html += '<p>' + value.Title + '</p>';
		console.log(value.Title)
}