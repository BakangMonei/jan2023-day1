// JavaScript

// add an event listener to the search form
document.querySelector('#search-form').addEventListener('submit', function(event) {
    // prevent the form from submitting
    event.preventDefault();

    // get the search query
    const query = document.querySelector('#search-form input').value;

    // search for movies with the query
    searchMovies(query);
});

// function to search for movies
function searchMovies(query) {
    // make a request to the movie database API
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${query}`)
        .then(response => response.json())
        .then(data => {
            // display the search results
            displaySearchResults(data.results);
        });
}

// function to display the search results
function displaySearchResults(movies) {