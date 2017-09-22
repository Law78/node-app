const passport = require('passport');

module.exports = (app) => {
  // Con la stringa 'google' indico a passport di usare la strategia Google.
  app.get('/auth/google', (res, req, next) => {
    console.log('ROSSELA VUOLE AUTENTICARSI CON GOOGLE')
    next();
  },passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback', passport.authenticate('google'),
  function(req, res){
    // Successful authentication, redirect home.
    console.log('EVVAI AUTENTICATO GOOGLE')
    res.redirect('/');
  });

  app.get('/auth/dropbox', (res, req, next) => {
    console.log('ROSSELA VUOLE AUTENTICARSI CON DROPBOX')
    next();
  },passport.authenticate('dropbox-oauth2'));

  app.get('/auth/dropbox/callback', 
  passport.authenticate('dropbox-oauth2', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log('EVVAI AUTENTICATO DROPBOX')
    res.redirect('/');
  });
}

