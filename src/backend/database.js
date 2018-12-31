const sqlite3 = require('sqlite3');
//const express = require("express");
//const bodyParser = require("body-parser");
//import sqlite from 'sqlite3';
//var poc_list = get_poc(populate_poc_list);

//function print_poc_list(){
  //console.log(poc_list);
//}

/**
function populate_poc_list(list){
  var poc = []
  for(let i = 0; i < list.length; i++){
    poc.push(list[i]);
  }

  return poc;
}

function get_poc(callback){
  var poc = [];

  let db = new sqlite3.Database('./data/wide.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the WIDE SQlite database to get POCs.');
  });

  let sql = 'SELECT * FROM poc';

  db.all(sql, (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    return callback(rows);


  });

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Closed the database connection.');
  });

}




function insert_hub(site_name, site_city){

  let db = new sqlite3.Database('./data/wide.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the WIDE SQlite database.');
  });

  db.run('INSERT INTO main_hubs(name, city) VALUES(?,?)', [site_name, site_city],
    function(err){
      if(err){
        return console.log(err.message);
      }
      console.log('row inserted with rowid ${this.lastID}');
    });

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
}
**/
