# randomstuffapijs

randomstuffapijs is an API wrapper for [RandomStuffAPI](https://rapidapi.com/pgamerxdev/api/random-stuff-api)

## Support

- [Discord Server](https://discord.gg/A7jDyPFH56)

## Installation

First install [Node.js](https://nodejs.org/en/) Then:
`npm install randomstuffapijs`

## Importing

```js
// Using Node.js "require()"
const rsa = require("randomstuffapijs");

// Using ES6 imports
import rsa from "randomstuffapijs";
```

## Example

```js
const rsa = require("randomstuffapijs");
const client = new rsa.client({
  Authorization: "Your API Key",
  RapidAPIKey: "Your Rapid API Key",
  RapidAPIHost: "Your Rapid API Host",
});

let response = client.getAIResponse({
  message: "Hello there!",
  bot_name: "Adib Bot",
  bot_master: "Adib",
});

console.log(response);
```

## Documentation

Coming Soon.
