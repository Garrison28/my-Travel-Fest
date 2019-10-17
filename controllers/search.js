const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');

router.get('/search', function(req, res) {
    res.render('profile/search');
});

module.exports = router;
