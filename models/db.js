const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'mahasiswa',
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.error('Error connection to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database');
    }

});

module.exports = connection;