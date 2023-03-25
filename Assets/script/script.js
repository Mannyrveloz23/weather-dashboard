const searchBtn = document.querySelector('.fa');
const searchInput = document.querySelector('#input');
const searchHistory = document.querySelector('.search-history');

// let requestUrl = "http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={22e14a0417438591076e071dfd21f126}"

fetch('http://api.openweathermap.org/data/2.5/weather?q=Orlando,Florida&appid=22e14a0417438591076e071dfd21f126')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


searchBtn.addEventListener('click', () => {
    recentSearch();
});

// add an event listener to the search input field
searchInput.addEventListener('keydown', (event) => {
    // check if the key pressed is the Enter key
    if (event.keyCode === 13) {
        // trigger the click event on the search button
        searchBtn.click();
    }
});

const recentSearch = () => {
    const searchTerm = searchInput.value;

    // create a new li element with the search term as its text content
    const newSearchItem = document.createElement('p');
    newSearchItem.classList.add("light-text");
    newSearchItem.classList.add("suggestion");
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

};



