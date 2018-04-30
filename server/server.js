// server.js
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

const port = 8090;

var orders = [];

app.listen(port, () => {
  console.log('We are live on ' + port);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/orders', (req, res) => {
  orders.push(req.body);
  res.send(JSON.stringify(orders));
});

app.get('/orders', (req, res) => {
  console.log('Request for orders. There are ' + orders.length + ' in the system');
  res.send(JSON.stringify(orders));
});
