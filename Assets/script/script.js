const searchBtn = $('.fa');
const searchInput = $('#input');
const searchHistory = $('.search-history');

$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Orlando,Florida&appid=22e14a0417438591076e071dfd21f126',
    dataType: 'json',
    success: function(data) {
        console.log(data);
    },
    error: function(error) {
        console.log(error)
    }
});


searchBtn.on('click', function() {
    recentSearch();
});

// add an event listener to the search input field
searchInput.on('keydown', function (event) {
    // check if the key pressed is the Enter key
    if (event.keyCode === 13) {
        // trigger the click event on the search button
        searchBtn.trigger('click');
    }
});

const recentSearch = function() {
    const searchTerm = searchInput.val;

    // create a new li element with the search term as its text content
    const newSearchItem = $('<p class="light-text suggestion">' + searchTerm + '');

      // add an event listener to the new li element
      newSearchItem.on('click', function() {
        // retrieve the search term from the text content of the clicked li element
        const clickedTerm = $(this).text();

        // set the search input field value to the clicked term
        searchInput.val(clickedTerm);

        // perform the search again
        // your code here
    });

    // append the new li element to the search history container
    searchHistory.append(newSearchItem);

    // clear the search input field
    searchInput.val('');

};



