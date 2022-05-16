const mysql = require('mysql');

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Oladerio!1234',
    database: 'chatapp'
})

conection.connect((error)=>{
    if(error){
        console.error("connection failure: "+ error);
    }
    else{
        console.log('database connection was successful')
    }
})

module.exports = conection