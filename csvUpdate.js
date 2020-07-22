/*
  This is used to get urls for the cover images and the short descriptions from each game from the itch.io API.
*/

require('dotenv').config()

const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs');
const axios = require('axios');
const delay = require('delay');

const games = [];

fs.createReadStream('gamelist.csv')
  .pipe(csv())
  .on('data', (row) => {
    games.push(row);
  })
  .on('end', async () => {
    console.log('CSV file successfully processed');

    const csvWriter = createCsvWriter({
      path: 'updatedGameList.csv',
      header: [
        {id: 'page', title: 'page'},
        {id: 'title', title: 'title'},
        {id: 'category', title: 'category'},
        {id: 'id', title: 'id'},
        {id: 'url', title: 'url'},
        {id: 'day', title: 'day'},
        {id: 'cover_url', title: 'cover_url'},
        {id: 'short_text', title: 'short_text'},
      ]
    });

    const data = [];

    for (let game in games) {
      const i = games[game];
      // Delay to avoid rate limiting.
      await delay(200);
      try {
        const apiData = await axios(`https://itch.io/api/1/${process.env.ITCHIO_API_KEY}/game/${i.id}`)
      
        i.cover_url = apiData.data.game.cover_url
        i.short_text = apiData.data.game.short_text
      } catch (error) {
        console.log("** ERROR **");
        console.log("INDEX:", index);
        console.log(error);
        console.log();
      }
      data.push(i);
    }
    
    csvWriter
      .writeRecords(data)
      .then(()=> console.log('The CSV file was written successfully'));
  });



