'use strict';
var sql = require('../utils/db.js');

/**
 * Create Utilizador
 *
 * body Utilizador  (optional)
 * returns Utilizador
 **/
exports.createUtilizador = function (body) {
  // FEITO
  return new Promise(function (resolve, reject) {
    sql.query(
      'INSERT INTO utilizador (nome, email, cargo, telefone, password) Values(?, ?, ?, ?, ?)',
      [body.nome, body.email, body.cargo, body.telefone, body.password],
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
 * Delete Utilizador
 *
 * id Long
 * no response value expected for this operation
 **/
exports.deleteUtilizador = function (id) {
  //FEITO
  return new Promise(function (resolve, reject) {
    sql.query('DELETE FROM utilizador WHERE id = ?', [id], function (err, res) {
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
 * Retrieve Utilizador
 *
 * id Long
 * returns Utilizador
 **/
exports.retrieveUtilizador = function (id) {
  //FEITO
  return new Promise(function (resolve, reject) {
    sql.query(
      'SELECT * FROM utilizador WHERE id = ?',
      [id],
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res);
          resolve(res[0]);
        }
      },
    );
  });
};

/**
 * Retrieve Utilizadores
 *
 * cargo String Array filter by cargo of Utilizador (optional)
 * returns List
 **/
exports.retrieveUtilizadores = function (cargo) {
  //FEITO
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

    let queryString = 'SELECT * FROM utilizador';

    if (cargo) {
      queryString = `SELECT * FROM utilizador where cargo like '%${cargo}%'`;
    }

    sql.query(queryString, callback);
  });
};

/**
 * Update Utilizador
 *
 * body Utilizador
 * id Long
 * no response value expected for this operation
 **/
exports.updateUtilizador = function (body, id) {
  //FEITO
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query(
      'UPDATE utilizador set nome = ?, email = ?, cargo = ?, telefone= ?, password = ?  WHERE id = ?',
      [body.nome, body.email, body.cargo, body.telefone, body.password, id],
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
