'use strict';

var utils = require('../utils/writer.js');
var AvariasController = require('../service/AvariasControllerService');

module.exports.createAvaria = function createAvaria (req, res, next, body) {
  AvariasController.createAvaria(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAvaria = function deleteAvaria (req, res, next, id) {
  AvariasController.deleteAvaria(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAvaria = function retrieveAvaria (req, res, next, id) {
  AvariasController.retrieveAvaria(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAvarias = function retrieveAvarias (req, res, next) {
  AvariasController.retrieveAvarias()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAvaria = function updateAvaria (req, res, next, body, id) {
  AvariasController.updateAvaria(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
