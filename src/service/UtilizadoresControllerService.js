'use strict';


/**
 * Create Utilizador
 *
 * body Utilizador  (optional)
 * returns Utilizador
 **/
exports.createUtilizador = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "nome" : "Lucas",
  "cargo" : "Admin",
  "telefone" : 919999999,
  "password" : "Admin123"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Utilizador
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteUtilizador = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve Utilizador
 *
 * id Long 
 * returns Utilizador
 **/
exports.retrieveUtilizador = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "nome" : "Lucas",
  "cargo" : "Admin",
  "telefone" : 919999999,
  "password" : "Admin123"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Utilizadores
 *
 * cargo String Array filter by cargo of Utilizador (optional)
 * returns List
 **/
exports.retrieveUtilizadores = function(cargo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "nome" : "Lucas",
  "cargo" : "Admin",
  "telefone" : 919999999,
  "password" : "Admin123"
}, {
  "id" : 1,
  "nome" : "Lucas",
  "cargo" : "Admin",
  "telefone" : 919999999,
  "password" : "Admin123"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Utilizador
 *
 * body Utilizador 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateUtilizador = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

