const passport = require('passport');

module.exports = (app) => {
  // Con la stringa 'google' indico a passport di usare la strategia Google.
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback', passport.authenticate('google'));
}

