var mysql = require('mysql');

var con = mysql.createConnection({

   host: "localhost",

   user: "root",

   password: "password",

   database : "CSI_lab_contacts"

 });

  con.connect(function(err) {

   if (err) throw err;

   console.log("Connecté à la base de données MySQL!");

  });
