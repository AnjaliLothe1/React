const mysql = require("mysql");

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "react",
};

const connection = mysql.createConnection(dbinfo);

connection.connect();

// QUERY
let sql = `INSERT INTO LinkedIn (username, password) values ("Aniruddha", "GUI")`;
connection.query(sql);

console.log("selected....");

connection.end();