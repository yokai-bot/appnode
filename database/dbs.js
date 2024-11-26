const mysql = require ('mysql2');

const conexion = mysql.createPool({
    host : "localhost",
    user : "usernode",
    password : "12345678",
    database : "appnode",
    
});


module.exports = conexion