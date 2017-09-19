const passport        = require('passport');
const GoogleStrategy  = require('passport-google-oauth20').Strategy;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
const config = require('../config/env.'+process.env.NODE_ENV+ '.json');

passport.use(
  new GoogleStrategy({
    clientID: process.env.googleClientId || config.google.googleClientId,
    clientSecret: process.env.googleClientSecret || config.google.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log('access token:', accessToken);
    console.log('refresh token:', refreshToken);
    console.log('profile:', profile);
  })
);