'use strict';
var sql = require('../utils/db.js');

/**
 * Create Comentario
 *
 * body Comentario  (optional)
 * returns Comentario
 **/
exports.createComentario = function (body) {
  return new Promise(function (resolve, reject) {
    console.log(new Date().getTime());
    sql.query(
      'INSERT INTO comentarios (id_utilizador, id_antena, conteudo, data_criacao) Values(?, ?, ?, ?)',
      [body.id_utilizador, body.id_antena, body.conteudo, new Date().getTime()],
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
 * Delete Comentario
 *
 * id Long
 * no response value expected for this operation
 **/
exports.deleteComentario = function (id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      'DELETE FROM comentarios WHERE id = ?',
      [id],
      function (err, res) {
        if (err || !res.affectedRows) {
          console.log(err);
          console.log(res);
          reject();
        } else {
          console.log(res);
          resolve({ deleted: id });
        }
      },
    );
  });
};

/**
 * Retrieve Comentarios
 *
 * returns List
 **/
exports.retrieveComentarios = function (type, id) {
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

    if (!['antena', 'utilizador'].includes(type)) reject();

    const coluna = type === 'antena' ? 'id_antena' : 'id_utilizador';
    const queryString = `SELECT * FROM comentarios where ${coluna} = ${id}`;

    sql.query(queryString, callback);
  });
};
