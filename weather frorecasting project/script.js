let cityInput = document.getElementById('city_input'),
    searchBtn = document.getElementById('searchBtn'),
    api_key = '039742c8c0502fb2f7f0d8446bc26883';


//function getWeatherDetails(city, lat, lon, country, state) {
//  let FORECAST_API_URL = ' ';
// }


function getCityCoordinates() {
    let cityName = cityInput.value.trim();
    //  console.log(cityName);

    cityInput.value = '';
    if (!cityName) return;
    let GEOCODING_API_URL = 'http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid={api_key}';

    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {

        console.log(data);

        //  let { name, lat, lon, country, state } = data[0];
        //getWeatherDetails(name, lat, lon, country, state);

    }).catch(() => {
        alert('Failed to fetch coordinates of ${cityName}');
    });


}

searchBtn.addEventListener('click', getCityCoordinates);