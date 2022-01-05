const mysql = require("mysql");

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "react",
};

const connection = mysql.createConnection(dbinfo);

connection.connect();

//user create
const LinkedIn={
    username:"Dr. CP Johnson",
    password:"boost"
};

// QUERY
let sql = `INSERT INTO LinkedIn (username, password) values ("${LinkedIn.username}", "${LinkedIn.password}")`;
connection.query(sql);

console.log("selected....");

connection.end();