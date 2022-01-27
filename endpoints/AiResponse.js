function getAiResponse(
  authorizations,
  rapidAPIHosts,
  rapidAPIKeys,
  message,
  bot_name,
  bot_gender,
  bot_master,
  bot_age,
  bot_company,
  bot_location,
  bot_email,
  bot_build,
  bot_birth_year,
  bot_birth_date,
  bot_birth_place,
  bot_favorite_color,
  bot_favorite_book,
  bot_favorite_band,
  bot_favorite_artist,
  bot_favorite_actress,
  bot_favorite_actor,
  id
) {
  let axios = require("axios").default;

  let options = {
    method: "GET",
    url: "https://random-stuff-api.p.rapidapi.com/ai",
    params: {
      msg: message,
      bot_name: bot_name,
      bot_gender: bot_gender,
      bot_master: bot_master,
      bot_age: bot_age,
      bot_company: bot_company,
      bot_location: bot_location,
      bot_email: bot_email,
      bot_build: bot_build,
      bot_birth_year: bot_birth_year,
      bot_birth_date: bot_birth_date,
      bot_birth_place: bot_birth_place,
      bot_favorite_color: bot_favorite_color,
      bot_favorite_book: bot_favorite_book,
      bot_favorite_band: bot_favorite_band,
      bot_favorite_artist: bot_favorite_artist,
      bot_favorite_actress: bot_favorite_actress,
      bot_favorite_actor: bot_favorite_actor,
      id: id,
    },
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

module.exports = { getAiResponse };
