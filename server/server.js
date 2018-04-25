// server.js
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

const port = 8090;

var orders = ["test1", "test2"];

app.listen(port, () => {
  console.log('We are live on ' + port);
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/orders', (req, res) => {
  console.log(req.body)
  res.send('Hello')
});

app.get('/orders', (req, res) => {
  res.send(JSON.stringify(orders));
});
