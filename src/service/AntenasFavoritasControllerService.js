'use strict';


/**
 * Create Antena Favorita
 *
 * body AntenaFavorita  (optional)
 * returns AntenaFavorita
 **/
exports.createAntenaFavorita = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "id_utilizador" : 1,
  "id_antena" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Antena Favorita
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteAntenaFavorita = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve Antenas Favoritas
 *
 * returns List
 **/
exports.retrieveAntenasFavoritas = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "id_utilizador" : 1,
  "id_antena" : 1
}, {
  "id" : 1,
  "id_utilizador" : 1,
  "id_antena" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

