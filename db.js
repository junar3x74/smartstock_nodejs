const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'smartstock_db'
})


    db.connect((error) => {
        if(error){
            console.log("Error MYSQL not connected!!!")
        }else{
            console.log("MYSQL connected ...")
        }
    })


