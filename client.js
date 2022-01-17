const AIResponse = require("./endpoints/AiResponse");
const Joke = require("./endpoints/Joke");
const Reddit = require("./endpoints/Reddit");
const Animals = require("./endpoints/Animals");
const Canvas = require("./endpoints/Canvas");
const Facts = require("./endpoints/Facts");
const Waifu = require("./endpoints/Waifu");
const Weather = require("./endpoints/Weather");

class client {
  constructor({ Authorization, RapidAPIHost, RapidAPIKey }) {
    this.Authorization = Authorization;
    this.RapidAPIHost = RapidAPIHost;
    this.RapidAPIKey = RapidAPIKey;
  }

  getAIResponse({
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
    id,
  }) {
    AIResponse.getAiResponse(
      this.Authorization,
      this.RapidAPIHost,
      this.RapidAPIKey,
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
    );
  }

  getJoke({ type, blacklist }) {
    Joke.getJoke(
      this.Authorization,
      this.RapidAPIHost,
      this.RapidAPIKey,
      type,
      blacklist
    );
  }

  getReddit({ searchType, method }) {
    Reddit.getReddit(
      this.Authorization,
      this.RapidAPIHost,
      this.RapidAPIKey,
      searchType,
      method
    );
  }

  getAnimals({ animal, limit }) {
    Animals.getAnimals(
      this.Authorization,
      this.RapidAPIHost,
      this.RapidAPIKey,
      animal,
      limit
    );
  }

  getCanvas({ method, img1, img2, img3, txt }) {
    Canvas.getCanvas(
      this.Authorization,
      this.RapidAPIHost,
      this.RapidAPIKey,
      method,
      img1,
      img2,
      img3,
      txt
    );
  }

  getFacts({ type }) {
    Facts.getFacts(
      this.Authorization,
      this.RapidAPIHost,
      this.RapidAPIKey,
      type
    );
  }

  getWaifu({ type }) {
    Waifu.getWaifu(
      this.Authorization,
      this.RapidAPIHost,
      this.RapidAPIKey,
      type
    );
  }

  getWeather({ city }) {
    Weather.getWeather(
      this.Authorization,
      this.RapidAPIHost,
      this.RapidAPIKey,
      city
    );
  }
}

module.exports = { client };
