const csvtojson=require("csvtojson/v2");
const moment = require("moment")

const startDate = 1595239200560;
const oneDay = 24 * 60 * 60 * 1000;

async function getCSV() {
  let gameList = await csvtojson().fromFile("./gamelist.csv");
  gameList = gameList.map(i => {
    // Make 0 indexed
    i.day = parseInt(i.day) - 1;
    return i;
  })
  gameList.sort((a, b) => (a.day > b.day) ? 1 : (a.day === b.day) ? ((a.day > b.day) ? 1 : -1) : -1 )
  gameList = gameList.map(i => {
    const offset = i.day * oneDay;
    const date = new Date(startDate + offset);
    i.date = moment(date).format("MMMM Do YYYY");
    i.idDate = moment(date).format("YYYY-MM-DD");
    return i;
  })
  return gameList
}

module.exports = getCSV()