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

//Inserting New Data
let q = "INSERT INTO USER(id, username, email, password) values ?";

let data = [];
for (let i = 1; i <= 100; i++){
    data.push(getRandomUser()); //100 fake users
}

try{
    connection.query(q, [data], (err, result) => {
        if (err) throw err;
        console.log(result);
    });
}catch(err) {
    console.log(err);
}

connection.end();