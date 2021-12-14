const { application } = require('express');
var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'awap',
    user: 'root',
    password: 'root'
});

module.exports = connection;