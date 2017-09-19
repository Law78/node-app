const express         = require('express');
// mi assicuro di avviare la strategia di passport
require('./services/passport');

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
const config = require('./config/env.'+process.env.NODE_ENV+ '.json');

const app = express();
// avvio le routes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || config.server.PORT;
const fake_obj = require('./fake_db/fake_obj');

app.get('/', (req, res) => {
  res.status(200).send(fake_obj);
});


app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

app.listen(PORT, function(){
  console.log('Server in ascolto...on', PORT);
});

module.exports = app;