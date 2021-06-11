'use strict';
var sql = require('../utils/db.js');

/**
 * Create Antena Favorita
 *
 * body AntenaFavorita  (optional)
 * returns AntenaFavorita
 **/
exports.createAntenaFavorita = function (id_utilizador, id_antena) {
  //ok
  return new Promise(function (resolve, reject) {
    sql.query(
      'INSERT INTO antena_favorita (id_utilizador, id_antena) Values(?, ?)',
      [id_utilizador, id_antena],
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
 * Delete Antena Favorita
 *
 * id Long
 * no response value expected for this operation
 **/
exports.deleteAntenaFavorita = function (id_utilizador, id_antena) {
  //ok
  return new Promise(function (resolve, reject) {
    sql.query(
      'DELETE FROM antena_favorita WHERE id_utilizador = ? and  id_antena = ?',
      [id_utilizador, id_antena],
      function (err, res) {
        if (err || !res.affectedRows) {
          console.log(err);
          console.log(res);
          reject();
        } else {
          console.log(res);
          resolve({ deleted: id_utilizador + '/' + id_antena });
        }
      },
    );
  });
};

/**
 * Retrieve Antenas Favoritas
 *
 * returns List
 **/
exports.retrieveAntenasFavoritas = function (id_utilizador) {
  //ok
  return new Promise(function (resolve, reject) {
    sql.query(
      'SELECT * FROM antena_favorita WHERE id_utilizador = ?',
      [id_utilizador],
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res);
          resolve(res);
        }
      },
    );
  });
};
