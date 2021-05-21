'use strict';

var utils = require('../utils/writer.js');
var AntenasFavoritasController = require('../service/AntenasFavoritasControllerService');

module.exports.createAntenaFavorita = function createAntenaFavorita(
  req,
  res,
  next,
  id_utilizador,
  id_antena,
) {
  AntenasFavoritasController.createAntenaFavorita(id_utilizador, id_antena)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAntenaFavorita = function deleteAntenaFavorita(
  req,
  res,
  next,
  id_utilizador,
  id_antena,
) {
  AntenasFavoritasController.deleteAntenaFavorita(id_utilizador, id_antena)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAntenasFavoritas = function retrieveAntenasFavoritas(
  req,
  res,
  next,
  id_utilizador,
) {
  AntenasFavoritasController.retrieveAntenasFavoritas(id_utilizador)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
