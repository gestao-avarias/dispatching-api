'use strict';
var sql = require('../utils/db.js');

/**
 * Create Avaria
 *
 * body Avaria  (optional)
 * returns Avaria
 **/
exports.createAvaria = function (body) {
  console.log(body);

  return new Promise(function (resolve, reject) {
    sql.query(
      'INSERT INTO avaria (nome, id_utilizador, id_antena, status, data_abertura, detalhe) Values(?, ?, ?, ?, UNIX_TIMESTAMP(CURRENT_TIMESTAMP()), ?)',
      [body.nome, body.id_utilizador, body.id_antena, 1, body.detalhe],
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
 * Delete Avaria
 *
 * id Long
 * no response value expected for this operation
 **/
exports.deleteAvaria = function (id) {
  return new Promise(function (resolve, reject) {
    sql.query('DELETE FROM avaria WHERE id = ?', [id], function (err, res) {
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
 * Retrieve Avaria
 *
 * id Long
 * returns Avaria
 **/
exports.retrieveAvaria = function (id) {
  return new Promise(function (resolve, reject) {
    sql.query('SELECT * FROM avaria WHERE id = ?', [id], function (err, res) {
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
 * Retrieve Avarias
 *
 * returns List
 **/
exports.retrieveAvarias = function () {
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

    let queryString =
      'SELECT avaria.*, utilizador.nome as nome_utilizador, antena.nome as nome_antena   FROM avaria join utilizador on avaria.id_utilizador = utilizador.id join antena on avaria.id_antena =  antena.id ';

    sql.query(queryString, callback);
  });
};

/**
 * Update Avaria
 *
 * body Avaria
 * id Long
 * no response value expected for this operation
 **/
exports.updateAvaria = function (body, id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      'UPDATE avaria set nome = ?, id_utilizador = ?, id_antena = ?, status = ?, data_conclusao = UNIX_TIMESTAMP(CURRENT_TIMESTAMP()), detalhe = ?  WHERE id = ?',
      [body.nome, body.id_utilizador, body.id_antena, 0, body.detalhe, id],
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
