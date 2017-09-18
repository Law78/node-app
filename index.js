const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const fake_obj = require('./fake_db/fake_obj');

app.get('/', (req, res) => {
  res.status(200).send(fake_obj);
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

app.listen(PORT, function(){
  console.log('Server in ascolto...');
});

module.exports = app;