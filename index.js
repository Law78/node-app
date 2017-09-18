const express         = require('express');
const passport        = require('passport');
const GoogleStrategy  = require('passport-google-oauth20').Strategy;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
const config = require('./config/env.'+process.env.NODE_ENV+ '.json');

console.log(config);

const app = express();

passport.use(
  new GoogleStrategy({
    clientID: process.env.googleClientId || config.google.googleClientId,
    clientSecret: process.env.googleClientSecret || config.google.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, accessToken => {
    console.log(accessToken);
  })
);

const PORT = process.env.PORT || config.server.PORT;
const fake_obj = require('./fake_db/fake_obj');

app.get('/', (req, res) => {
  res.status(200).send(fake_obj);
});

// Con la stringa 'google' indico a passport di usare la strategia Google.
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

app.listen(PORT, function(){
  console.log('Server in ascolto...on', PORT);
});

module.exports = app;