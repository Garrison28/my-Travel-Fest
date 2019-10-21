const express = require('express');
const router = express.Router();
const axios = require('axios');
const passport = require('../config/ppConfig');
const db = require('../models');
// const BASE_URL = ''
const BASE_ARTIST_URL = 'https://api.songkick.com/api/3.0/search/artists.json?apikey={your_api_key}&query={artist_name}';

// renders the search page ejs
// router.get('/profileInfo/search', function(req, res) {
//   res.render('profileInfo/search');
// });
router.get('/profileInfo/search', function (req, res) {
  // calling songkick api to display artist search results
  axios.get(BASE_ARTIST_URL, {
    params: {
      query: req.params.artist_name,
      apikey: process.env.API_KEY
    }
  }).then(function(apiResponse) {
    var artists = apiResponse.data;
    console.log(artists);
    res.render('profileInfo/search', { artists });
  });
});

router.post('/profileInfo/search', function(req, res) {
  res.send('porfileInfo/search');
});


module.exports = router;
