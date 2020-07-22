const csvtojson = require("csvtojson/v2");
var fs = require('fs');

(async () => {
  let gameList = await csvtojson().fromFile("./gamelist.csv");
  fs.writeFile('gameList.json', JSON.stringify(gameList), 'utf8', () => 1);
})()
