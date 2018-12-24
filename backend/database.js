const sqlite3 = require('sqlite3').verbose();
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

insert_hub('KMCI', 'Kansas City');

function get_poc(){


  return poc_list;
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
