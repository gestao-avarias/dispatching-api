'use strict';

var utils = require('../utils/writer.js');
var AntenasFavoritasController = require('../service/AntenasFavoritasControllerService');

module.exports.createAntenaFavorita = function createAntenaFavorita (req, res, next, body) {
  AntenasFavoritasController.createAntenaFavorita(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAntenaFavorita = function deleteAntenaFavorita (req, res, next, id) {
  AntenasFavoritasController.deleteAntenaFavorita(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAntenasFavoritas = function retrieveAntenasFavoritas (req, res, next) {
  AntenasFavoritasController.retrieveAntenasFavoritas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
