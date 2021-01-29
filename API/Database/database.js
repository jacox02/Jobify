const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "b0sfslo2fk2n7unict7p-mysql.services.clever-cloud.com",
  port: 3306,
  user: "ueu6tybzavoosuu6",
  password: "mIInHAx0SF37MxAhBXus",
  database: "b0sfslo2fk2n7unict7p",
});

module.exports = connection;
