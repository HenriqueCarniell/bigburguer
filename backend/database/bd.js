const dotenv = require('dotenv').config()
console.log(dotenv.error) 

const mysql = require('mysql2')

const db = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '2006',
    database: 'bigburger',
});

module.exports = db;
