const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta",
    password: "@Sumit3101",
});

let getRandomUser = () => {
    return[
        faker.datatype.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ];
};

connection.end();

app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try{
        connection.query(q,(err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result); 
        });
    }catch(err){
        console.log(err);
        res.send("some error in DataBase");
    }
});

app.listen("8080", () => {
    console.log("server is listening to port 8080");
});







//Inserting New Data
// let q = "INSERT INTO USER(id, username, email, password) values ?";

// let data = [];
// for (let i = 1; i <= 100; i++){
//     data.push(getRandomUser()); //100 fake users
// }

// try{
//     connection.query(q, [data], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// }catch(err) {
//     console.log(err);
// }