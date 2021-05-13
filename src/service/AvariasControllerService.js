'use strict';
var sql = require('../utils/db.js');

/**
 * Create Avaria
 *
 * body Avaria  (optional)
 * returns Avaria
 **/
exports.createAvaria = function (body) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      id: 1,
      nome: 'Antena Espinho',
      id_utilizador: 33432,
      status: true,
      data_abertura: '2017-07-21T17:32:28Z',
      data_conclusao: '',
      detalhe: 'SITE DOWN',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Delete Avaria
 *
 * id Long
 * no response value expected for this operation
 **/
exports.deleteAvaria = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

/**
 * Retrieve Avaria
 *
 * id Long
 * returns Avaria
 **/
exports.retrieveAvaria = function (id) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      id: 1,
      nome: 'Antena Espinho',
      id_utilizador: 33432,
      status: true,
      data_abertura: '2017-07-21T17:32:28Z',
      data_conclusao: '',
      detalhe: 'SITE DOWN',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Retrieve Avarias
 *
 * returns List
 **/
exports.retrieveAvarias = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {
        id: 1,
        nome: 'Antena Espinho',
        id_utilizador: 33432,
        status: true,
        data_abertura: '2017-07-21T17:32:28Z',
        data_conclusao: '',
        detalhe: 'SITE DOWN',
      },
      {
        id: 1,
        nome: 'Antena Espinho',
        id_utilizador: 33432,
        status: true,
        data_abertura: '2017-07-21T17:32:28Z',
        data_conclusao: '',
        detalhe: 'SITE DOWN',
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
 * Update Avaria
 *
 * body Avaria
 * id Long
 * no response value expected for this operation
 **/
exports.updateAvaria = function (body, id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};
