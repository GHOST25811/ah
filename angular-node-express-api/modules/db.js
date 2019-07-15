const mysql = require('mysql');

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "pro"
});

connection.connect((err,res) => {
    if (err) throw err;
    else       console.log('hi db2' );
    
});
module.exports=connection;