'use strict';

var utils = require('../utils/writer.js');
var ComentariosController = require('../service/ComentariosControllerService');

module.exports.createComentario = function createComentario(
  req,
  res,
  next,
  body,
) {
  ComentariosController.createComentario(body)
    .then(ComentariosController.retrieveComentarios)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteComentario = function deleteComentario(
  req,
  res,
  next,
  id,
) {
  ComentariosController.deleteComentario(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveComentarios = function retrieveComentarios(
  req,
  res,
  next,
) {
  ComentariosController.retrieveComentarios()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
