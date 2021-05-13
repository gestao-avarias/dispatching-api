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
    console.log(body);
    sql.query(
      'Insert into Comentarios (id_utilizador, id_antena)',
      [body.id_utilizador, body.id_antena],
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res.insertId);
          resolve(res.insertedId);
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
      'Delete from Comentarios where id = ? ',
      [id],
      function (err, res) {
        if (err || !res.affectedRows) {
          console.log(err);
          console.log(res);
          reject();
        } else {
          console.log(res);
          resolve();
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
exports.retrieveComentarios = function (id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      'Select * from Comentarios where id = ?',
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
