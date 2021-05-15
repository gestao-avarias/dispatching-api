'use strict';


/**
 * Create Comentario
 *
 * body Comentario  (optional)
 * returns Comentario
 **/
exports.createComentario = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "id_utilizador" : 1,
  "id_antena" : 1,
  "conteudo" : "Antena sem baterias",
  "timestamp" : "10-04-2021 09:00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Comentario
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteComentario = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve Comentarios
 *
 * returns List
 **/
exports.retrieveComentarios = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "id_utilizador" : 1,
  "id_antena" : 1,
  "conteudo" : "Antena sem baterias",
  "timestamp" : "10-04-2021 09:00:00"
}, {
  "id" : 1,
  "id_utilizador" : 1,
  "id_antena" : 1,
  "conteudo" : "Antena sem baterias",
  "timestamp" : "10-04-2021 09:00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

