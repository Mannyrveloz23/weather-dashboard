const searchBtn = document.querySelector('.btn-primary');
const searchInput = document.querySelector('.form-control');
const searchHistory = document.querySelector('#search-history');

// add an event listener to the search input field
searchInput.addEventListener('keydown', (event) => {
    // check if the key pressed is the Enter key
    if (event.keyCode === 13) {
        // trigger the click event on the search button
        searchBtn.click();
    }
});

searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value;

    // create a new li element with the search term as its text content
    const newSearchItem = document.createElement('li');
    newSearchItem.textContent = searchTerm;

      // add an event listener to the new li element
      newSearchItem.addEventListener('click', () => {
        // retrieve the search term from the text content of the clicked li element
        const clickedTerm = newSearchItem.textContent;

        // set the search input field value to the clicked term
        searchInput.value = clickedTerm;

        // perform the search again
        // your code here
    });

    // append the new li element to the search history container
    searchHistory.appendChild(newSearchItem);

    // clear the search input field
    searchInput.value = '';
});

