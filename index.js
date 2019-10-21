require('dotenv').config();
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('./config/ppConfig');
const flash = require('connect-flash');
const isLoggedIn = require('./middleware/isLoggedIn');
const helmet = require('helmet');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./models');
const RateLimit = require('express-rate-limit');

const app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(ejsLayouts);
app.use(helmet());

// Make 2 reate limiters for login and signup
const loginLimiter = new RateLimit({
  windowMs: 1000 * 60 * 5,
  max: 3,
  message: 'Max login attemps exceeded, please try again later'
});

const signupLimiter = new RateLimit({
  windowMs: 100 * 60 * 60,
  max: 3,
  message: 'Maximum accounts created in time limit, pease try again later'
});

// apply rate limiters to the routes, comment out while testing
// app.use('/auth/login', loginLimiter);
// app.use('/auth/signup', signupLimiter);

const sessionStore = new SequelizeStore({
  db: db.sequelize,
  expiration: 1000 * 60 * 30
});

// session must COME BEFORE flash and passport
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore
}));

// Use this line to set up the store table
sessionStore.sync();

// FLASH must come AFTER SEESION AND BEFORE passport middle-ware
app.use(flash());

// THIS MUST COME AFTER SESSION HAS BEEN SETUP!!
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/profile', isLoggedIn, function(req, res) {
  db.user.findOne().then(function(user) {
    res.render('profile', { user });
  });
});

app.use('/auth', require('./controllers/auth'));
app.use('/search', require('./controllers/search'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
