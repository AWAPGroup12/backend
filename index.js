var express = require("express");
var cors = require('cors')
var app = express();
var connection = require('./database');

app.use(cors()) 


app.listen(3001, function () {
  console.log('App listening on port 3001');
});

app.get('/restaurants', function (req, res) {
  connection.connect();

  connection.query('SELECT * FROM restaurant', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
    console.log(results);
    
  });

  connection.end();
});


app.get('/hamburgers', function (req, res) {
  connection.connect();
  
  connection.query('SELECT * FROM hamburger', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
    console.log(results);
    
  });

  connection.end();
});


app.get('/pizzas', function (req, res) {
  connection.connect();

  connection.query('SELECT * FROM pizza', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
    console.log(results);
    
  });

  connection.end();
});

app.get('/sushis', function (req, res) {
  connection.connect();

  connection.query('SELECT * FROM sushi', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
    console.log(results);
    
  });

  connection.end();
});

app.get('/drinks', function (req, res) {
  connection.connect();

  connection.query('SELECT * FROM drinks', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
    
    console.log(results);
    
  });

  connection.end();
});
