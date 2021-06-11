'use strict';

var utils = require('../utils/writer.js');
var AntenasController = require('../service/AntenasControllerService');

module.exports.createAntena = function createAntena(req, res, next, body) {
  AntenasController.createAntena(body)
    .then(AntenasController.retrieveAntena)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAntena = function deleteAntena(req, res, next, id) {
  AntenasController.deleteAntena(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAntena = function retrieveAntena(req, res, next, id) {
  AntenasController.retrieveAntena(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAntenas = function retrieveAntenas(
  req,
  res,
  next,
  nome,
) {
  AntenasController.retrieveAntenas(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAntena = function updateAntena(req, res, next, body, id) {
  AntenasController.updateAntena(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
