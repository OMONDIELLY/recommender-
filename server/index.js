

const express = require('express');
const cors = require('cors');
const app = express();


const mysql = require("mysql2");

const db = mysql.createPool({
     host : 'localhost',
     user : 'root',
     password: "ZhATX@2UB",
     database : 'recommender',
     insecureAuth : true

});

app.use((cors));
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.post('/api/insert' ,(req,res) => {
    
    const email_address = req.body.email_address
    const password = req.body.password
    const regNO = req.body.regNO
    const username = req.body.username

    const sqlInsert = "INSERT INTO  students (email_address, password, regNO, username ) VALUES('?','?','?', '?');"
    db.query(sqlInsert, [email_address, password, regNO, username],    (err, results) =>{
        console.log(error);
        if(err) console.error(err);
            console.log(error)
        })

    });
app.listen(3001, () =>{
    console.log("running on port 3001")
});