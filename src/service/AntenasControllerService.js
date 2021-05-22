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
    sql.query(
      'INSERT INTO antena (nome, latitude, longitude) Values(?, ?, ?)',
      [body.nome, body.latitude, body.longitude],
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res.insertId);
          resolve(res.insertId);
        }
      },
    );
  });
};

/**
 * Delete Antena
 *
 * id Long
 * no response value expected for this operation
 **/
exports.deleteAntena = function (id) {
  //ok
  return new Promise(function (resolve, reject) {
    sql.query('DELETE FROM antena WHERE id = ?', [id], function (err, res) {
      if (err || !res.affectedRows) {
        console.log(err);
        console.log(res);
        reject();
      } else {
        console.log(res);
        resolve({ deleted: id });
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
exports.retrieveAntena = function (id) {
  //ok
  return new Promise(function (resolve, reject) {
    sql.query('SELECT * FROM antena WHERE id = ?', [id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
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
exports.retrieveAntenas = function (nome) {
  //ok
  return new Promise(function (resolve, reject) {
    const callback = function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res);
      }
    };

    let queryString = 'SELECT * FROM antena';

    if (nome) {
      queryString = `SELECT * FROM antena where nome like '%${nome}%'`;
    }

    sql.query(queryString, callback);
  });
};

/**
 * Update Antena
 *
 * body Antena
 * id Long
 * no response value expected for this operation
 **/
exports.updateAntena = function (body, id) {
  // ok
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query(
      'UPDATE antena set nome = ?, latitude = ?, longitude = ?  WHERE id = ?',
      [body.nome, body.latitude, body.longitude, id],
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res);
          resolve(id);
        }
      },
    );
  });
};
