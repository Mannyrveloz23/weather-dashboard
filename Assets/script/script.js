const searchBtn = $('.fa');
const searchInput = $('#input');
const searchHistory = $('.search-history');

//display today's day
$("#timedateEl").text(dayjs().format('M/D/YYYY'));


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
    
    const searchTerm = searchInput.val();

    // create a new li element with the search term as its text content
    const newSearchItem = $('<p class="light-text suggestion">' + searchTerm + '</p>');

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

    //current weather data
    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=22e14a0417438591076e071dfd21f126&units=imperial`,
        dataType: 'json',
        success: function(data) {
            //date elements for forecast of 5 days
            $("#fcdateEl1").text(data.list[2].dt_txt);
            $("#fcdateEl2").text(data.list[10].dt_txt);
            $("#fcdateEl3").text(data.list[18].dt_txt);
            $("#fcdateEl4").text(data.list[26].dt_txt);
            $("#fcdateEl5").text(data.list[34].dt_txt);

            //weather condition for forecast
            $("#fcConditionEl1").text(data.list[2].weather[0].description);
            $("#fcConditionEl2").text(data.list[10].weather[0].description);
            $("#fcConditionEl3").text(data.list[18].weather[0].description);
            $("#fcConditionEl4").text(data.list[26].weather[0].description);
            $("#fcConditionEl5").text(data.list[34].weather[0].description);

            //wind for forecast
            $("#fcWindEl1").text(Math.round(data.list[2].wind.speed));
            $("#fcWindEl2").text(Math.round(data.list[10].wind.speed));
            $("#fcWindEl3").text(Math.round(data.list[18].wind.speed));
            $("#fcWindEl4").text(Math.round(data.list[26].wind.speed));
            $("#fcWindEl5").text(Math.round(data.list[34].wind.speed));

            //humidity for forecast
            $("#fcHumiddityEl1").text(data.list[2].main.humidity);
            $("#fcHumiddityEl2").text(data.list[10].main.humidity);
            $("#fcHumiddityEl3").text(data.list[18].main.humidity);
            $("#fcHumiddityEl4").text(data.list[26].main.humidity);
            $("#fcHumiddityEl5").text(data.list[34].main.humidity);

            //temperature for forecast
            $("#fcTempEl1").text(Math.round(data.list[2].main.temp));
            $("#fcTempEl2").text(Math.round(data.list[10].main.temp));
            $("#fcTempEl3").text(Math.round(data.list[18].main.temp));
            $("#fcTempEl4").text(Math.round(data.list[26].main.temp));
            $("#fcTempEl5").text(Math.round(data.list[34].main.temp));


            console.log(data);
        },
        error: function(error) {
            console.log(error)
        }
    });

    //forecast data
    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=22e14a0417438591076e071dfd21f126&units=imperial`,
        dataType: 'json',
        success: function(data) {
            //today's weather details 
            $("#cityEl").text(data.name);
            $('#tempEl').text(Math.round(data.main.temp));
            $("#cloudyEl").text(data.clouds.all);
            $("#humidityEl").text(data.main.humidity);
            $("#windEl").text(Math.round(data.wind.speed));
            $("#conditionEl").text(data.weather[0].description);
            $("#iconEl").attr({
                src: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                class: ""
            });

            console.log(data);
        },
        error: function(error) {
            console.log(error)
        }
    });
    
    // add an event listener to the new li element
    newSearchItem.on('click', function() {
    // retrieve the search term from the text content of the clicked li element
    const clickedTerm = $(this).text();
  
    // set the search input field value to the clicked term
    searchInput.val(clickedTerm);
  
    // perform the search again with the clicked term
    recentSearch(clickedTerm);
  });

};

// Set default search term to "Santiago de los Caballeros"
searchInput.val("Santiago de los Caballeros");
// Call the recentSearch function to perform the search
recentSearch();
  