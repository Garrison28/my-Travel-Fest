const express = require('express');
const router = express.Router();
const axios = require('axios');
const passport = require('../config/ppConfig');
const db = require('../models');
const BASE_ARTIST_URL = 'https://api.songkick.com/api/3.0/search/artists.json?apikey={your_api_key}&query={artist_name}';
const BASE_ARTIST_EVENT_URL = 'https://api.songkick.com/api/3.0/artists/{artist_name}/calendar.json?apikey={your_api_key}'
// renders the search page ejs + connect to api
router.get('/profileInfo/search', function(req, res) {
  res.render('profileInfo/search');
});

// router.get('/profileInfo/search/artist_name', function (req, res) {
//   // calling songkick api to display artist search results
//   axios.get(BASE_ARTIST_URL, {
//     params: {
//       query: req.params.artist_name,
//       apikey: process.env.API_KEY
//     }
//   }).then(function(apiResponse) {
//     var artists = apiResponse.data.resultsPage;
//     console.log(artists);
//     res.render('profileInfo/search', { artists });
//   });
// });

// router.post('/profileInfo/search', function(req, res) {
//   db.artist.findOrCreate(req.query.artist);
//   res.send('porfileInfo/search');
// });


module.exports = router;
