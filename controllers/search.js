const express = require('express');
const router = express.Router();
const axios = require('axios');
const passport = require('../config/ppConfig');
const db = require('../models');
const BASE_ARTIST_URL = 'https://api.songkick.com/api/3.0/search/artists.json?apikey={your_api_key}&query={artist_name}';
const BASE_ARTIST_EVENT_URL = 'https://api.songkick.com/api/3.0/artists/{artist_name}/calendar.json?apikey={your_api_key}'

// create GET route to display search bar
router.get('/results', function (req, res) {
  console.log(req.query.name);
  res.send('Hello');
});
// });

// create GET route to display search results
// calling songkick api to get artist search results
// });

// create POST route to save artists to faves db/page

// create DELETE route to delete artisst from faves

module.exports = router;
