const passport        = require('passport');
const GoogleStrategy  = require('passport-google-oauth20').Strategy;
const DropboxStrategy = require('passport-dropbox-oauth2').Strategy;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
const config = require('../config/env.'+process.env.NODE_ENV+ '.json');

passport.use(
  new GoogleStrategy({
    clientID: process.env.google_clientID || config.google.clientID,
    clientSecret: process.env.google_clientSecret || config.google.cientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log('access token:', accessToken);
    console.log('refresh token:', refreshToken);
    console.log('profile:', profile);
  })
);

passport.use(new DropboxStrategy({
  apiVersion: '2',
  clientID: config.dropbox.clientID,
  clientSecret: config.dropbox.clientSecret,
  callbackURL: "/auth/dropbox/callback"
}, (accessToken, refreshToken, profile) => {
  console.log('accessToken', accessToken);
  console.log('refreshToken', refreshToken);
  console.log('profile', profile);
}));
