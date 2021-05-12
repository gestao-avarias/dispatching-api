'use strict';
var sql = require('../utils/db.js');

/**
 * Create Antena
 *
 * body Antena  (optional)
 * returns Antena
 **/
exports.createAntena = function (body) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      id: 1,
      nome: 'Antena Espinho',
      coordenadas: '41.007336, -8.633650',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Delete Antena
 *
 * id Long
 * no response value expected for this operation
 **/
exports.deleteAntena = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Retrieve Antena
 *
 * id Long
 * returns Antena
 **/
exports.retrieveAntena = function (id) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      id: 1,
      nome: 'Antena Espinho',
      coordenadas: '41.007336, -8.633650',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Retrieve Antenas
 *
 * returns List
 **/
exports.retrieveAntenas = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {
        id: 1,
        nome: 'Antena Espinho',
        coordenadas: '41.007336, -8.633650',
      },
      {
        id: 1,
        nome: 'Antena Espinho',
        coordenadas: '41.007336, -8.633650',
      },
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Update Antena
 *
 * body Antena
 * id Long
 * no response value expected for this operation
 **/
exports.updateAntena = function (body, id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};
