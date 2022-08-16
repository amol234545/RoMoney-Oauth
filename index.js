const express = require('express');

const app = express();

app.get('/romoney/oauth.js', (req, res) => {
  res.send(require('./auth.js'))
});
app.get('/', (req, res) => {
  res.redirect('/romoney/oauth.js')
});
app.listen(3000, () => {
  console.log('server started');
});
