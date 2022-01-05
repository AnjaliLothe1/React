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

//user create
const LinkedIn={
    username:process.argv[2],
    password:process.argv[3]
};

// QUERY
let sql = `INSERT INTO LinkedIn (username, password) values ("${LinkedIn.username}", "${LinkedIn.password}")`;
connection.query(sql);

console.log("selected....");

connection.end();