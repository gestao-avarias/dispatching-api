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
    sql.query(
      'INSERT INTO comentarios (id_autor, id_antena, conteudo) Values(?, ?, ?)',
      [body.id_autor, body.id_antena, body.conteudo],
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
      'DELETE FROM antena_favorita WHERE id = ?',
      [id],
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
 * Retrieve Comentarios
 *
 * returns List
 **/
exports.retrieveComentarios = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {
        id: 1,
        id_utilizador: 1,
        id_antena: 1,
        conteudo: 'Antena sem baterias',
        timestamp: '10-04-2021 09:00:00',
      },
      {
        id: 1,
        id_utilizador: 1,
        id_antena: 1,
        conteudo: 'Antena sem baterias',
        timestamp: '10-04-2021 09:00:00',
      },
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
