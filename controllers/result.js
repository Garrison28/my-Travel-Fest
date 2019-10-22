const express = require('express');
const router = express.Router();
const axios = require('axios');
const passport = require('../config/ppConfig');
const db = require('../models');
const BASE_ARTIST_URL = 'https://api.songkick.com/api/3.0/search/artists.json?apikey={your_api_key}&query={artist_name}';
const BASE_ARTIST_EVENT_URL = 'https://api.songkick.com/api/3.0/artists/{artist_name}/calendar.json?apikey={your_api_key}'

// router.get('/', function (req, res) {
//   console.log(req.query.name);
//   axios.get(BASE_ARTIST_URL, {
//     params: {
//       query: req.params.artist_name,
//       apikey: process.env.API_KEY
//     }
//     // displaying search results on my results ejs page
//   }).then(function (apiResponse) {
//     var artists = apiResponse.data.results;
//     console.log(`😆`)
//     console.log(artists);
//     res.send('profile/showResults', { artists });
//   });
// });

module.exports = router;
