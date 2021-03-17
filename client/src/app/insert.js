var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "CSI_lab_contacts"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO employees (id, name, age, city) VALUES ?";
  var values = [
    ['1', 'Olivier','55','Montpellier'],
    ['2', 'Noé','23','Montpellier'],
    ['3', 'Christian','25','Lyon'],
    ['4', 'Eugène','21','Paris'],

  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
