'use strict';
var sql = require('../utils/db.js');

/**
 * Create Antena
 *
 * body Antena  (optional)
 * returns Antena
 **/
exports.createAntena = function (body) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO antena (nome, coordenadas) Values(?,?)", [body.nome, body.coordenadas], function(err, res){
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res.insertId);
        resolve(res.insertId);
      }
    });
  });
};

/**
 * Delete Antena
 *
 * id Long
 * no response value expected for this operation
 **/
exports.deleteAntena = function (id) { //ok
  return new Promise(function (resolve, reject) {
    sql.query("DELETE FROM antena WHERE id = ?", [id], function(err, res) {
      if (err || !res.affectedRows) {
        console.log(err);
        console.log(res);
        reject();
      }
      else {
        console.log(res);
        resolve({"deleted": id})
      }
    }); 
  });
};

/**
 * Retrieve Antena
 *
 * id Long
 * returns Antena
 **/
exports.retrieveAntena = function (id) { //ok
  return new Promise(function (resolve, reject) {
    sql.query("SELECT * FROM antena WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res);
        resolve(res[0]);
      }
    });
  });
};

/**
 * Retrieve Antenas
 *
 * returns List
 **/
exports.retrieveAntenas = function () { //ok
  return new Promise(function (resolve, reject) {
    sql.query("SELECT * FROM antena", function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res);
        resolve(res);
      }
    });
  });
};

/**
 * Update Antena
 *
 * body Antena
 * id Long
 * no response value expected for this operation
 **/
exports.updateAntena = function (body, id) { // ok
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query("UPDATE antena set nome = ?, coordenadas = ? WHERE id = ?", [body.nome, body.coordenadas, id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res);
        resolve(id);
      }
    })
  });
};
