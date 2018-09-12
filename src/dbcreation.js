var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mydb.db');
var check;
db.serialize(function() {

  db.run("CREATE TABLE if not exists author (firstName TEXT, lastName TEXT)");
  var stmt = db.prepare("INSERT INTO author VALUES (?, 'Spedding')");
  for (var i = 0; i < 10; i++) {
      stmt.run("Martin " + i);
  }
  stmt.finalize();

 
  db.run("CREATE TABLE if not exists country (firstName TEXT, lastName TEXT)");
  db.run("CREATE TABLE if not exists category (name TEXT, shortName TEXT)");
  db.run("CREATE TABLE if not exists Datasource (name TEXT)");
  db.run("CREATE TABLE if not exists post (Title TEXT, text TEXT)");
});

db.close();