function getWeather(authorizations, rapidAPIHosts, rapidAPIKeys, city) {
  let axios = require("axios").default;

  let options = {
    method: "GET",
    url: "https://random-stuff-api.p.rapidapi.com/weather",
    params: { city: city },
    headers: {
      authorization: authorizations,
      "x-rapidapi-host": rapidAPIHosts,
      "x-rapidapi-key": rapidAPIKeys,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.response;
    });
}

module.exports = { getWeather };
