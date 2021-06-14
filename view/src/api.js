export const API_URL = 'http://localhost:8080'; // arquivo de configuracao de todas as requisicoes feitas à API

// ################################################################################

// ANTENAS

export function GET_ALL_ANTENA() {
  return {
    url: API_URL + '/antenas',
    options: {
      method: 'GET',
    },
  };
}

export function GET_ANTENA_BY_ID(id) {
  return {
    url: API_URL + '/antenas/' + id,
    options: {
      method: 'GET',
    },
  };
}

export function CREATE_ANTENA(body) {
  return {
    url: API_URL + '/antenas',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function UPDATE_ANTENA(body, id) {
  return {
    url: API_URL + '/antenas/' + id,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function DELETE_ANTENA(id) {
  return {
    url: API_URL + '/antenas/' + id,
    options: {
      method: 'DELETE',
    },
  };
}

// AVARIAS

export function GET_ALL_AVARIA() {
  return {
    url: API_URL + '/avarias',
    options: {
      method: 'GET',
    },
  };
}

export function GET_AVARIA_BY_ID(id) {
  return {
    url: API_URL + '/avarias/' + id,
    options: {
      method: 'GET',
    },
  };
}

export function CREATE_AVARIA(body) {
  return {
    url: API_URL + '/avarias',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function UPDATE_AVARIA(body, id, id_utilizador, id_antena) {
  return {
    url: API_URL + '/avarias/' + id + id_utilizador + id_antena,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function DELETE_AVARIA(id) {
  return {
    url: API_URL + '/avarias/' + id,
    options: {
      method: 'DELETE',
    },
  };
}

// COMENTARIOS

export function GET_ALL_COMENTARIO(id) {
  return {
    url: API_URL + '/comentarios/' + id + '?type=antena',
    options: {
      method: 'GET',
    },
  };
}

export function CREATE_COMENTARIO(body) {
  return {
    url: API_URL + '/comentarios',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function DELETE_COMENTARIO(id) {
  return {
    url: API_URL + '/comentarios/' + id,
    options: {
      method: 'DELETE',
    },
  };
}

// UTILIZADORES

export function GET_ALL_UTILIZADOR() {
  return {
    url: API_URL + '/utilizadores',
    options: {
      method: 'GET',
    },
  };
}
