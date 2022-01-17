function getCanvas(
  authorizations,
  rapidAPIHosts,
  rapidAPIKeys,
  method,
  img1,
  img2,
  img3,
  txt
) {
  let axios = require("axios").default;

  let options = {
    method: "GET",
    url: "https://random-stuff-api.p.rapidapi.com/canvas/" + method,
    params: { img1: img1, img2: img2, img3: img3, txt: txt },
    headers: {
      authorization: authorizations,
      "x-rapidapi-host": rapidAPIHosts,
      "x-rapidapi-key": rapidAPIKeys,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error.response);
      return error;
    });
}

module.exports = { getCanvas };
