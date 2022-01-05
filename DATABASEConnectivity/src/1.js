console.log("Oracle guru");
const mysql=require("mysql");
const dbinfo={
    host: "localhost", // location of the database.
  user: "root",
  password: "cdac",
  database: "react",

};

const connection = mysql.createConnection(dbinfo);
connection.connect();
console.log("CONNECTION SUCCESS!!!!");

connection.end();


