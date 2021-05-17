'use strict';

var utils = require('../utils/writer.js');
var UtilizadoresController = require('../service/UtilizadoresControllerService');

module.exports.createUtilizador = function createUtilizador (req, res, next, body) {
  UtilizadoresController.createUtilizador(body)
  .then(UtilizadoresController.retrieveUtilizador)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUtilizador = function deleteUtilizador (req, res, next, id) {
  UtilizadoresController.deleteUtilizador(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveUtilizador = function retrieveUtilizador (req, res, next, id) {
  UtilizadoresController.retrieveUtilizador(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveUtilizadores = function retrieveUtilizadores (req, res, next, cargo) {
  UtilizadoresController.retrieveUtilizadores(cargo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUtilizador = function updateUtilizador (req, res, next, body, id) {
  UtilizadoresController.updateUtilizador(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
