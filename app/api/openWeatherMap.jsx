var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a919a5867ec603347cb3aea9b994221c&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error("No city found");
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error("No city found");
    });
  }
}



//a919a5867ec603347cb3aea9b994221c
