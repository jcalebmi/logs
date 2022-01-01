const mysql = require('mysql');
const config = require('./config.json');
const connection = mysql.createConnection({
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database
});

// exports.handler = (event) => {

    let body;
    const sql = "SELECT * FROM logs";
    connection.query(sql, (err, results) => {
        if(err) {
            throw err;
        } else {
            body = JSON.stringify(results);
        }
    })
//     const response = {
//         statusCode: 200,
//         body: body,
//     };

//     return response;
// }


