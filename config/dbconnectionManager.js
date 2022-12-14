const mysql = require('mysql2');

const client = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mandy@1996',
    database: 'management'
});

client.connect((err) => {
    if(!err) {
        console.log("connectd to db managment");
    }
});

module.exports = {
    client
};