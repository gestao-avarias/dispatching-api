export const API_URL = 'http://localhost:8080'; // arquivo de configuracao de todas as requisicoes feitas à API

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/auth/autenticacao',
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + '/user',
    options: {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    },
  };
}

export function ANTENA_FAV_GET(token) {
  return {
    url: API_URL + '/user/antenasFav',
    options: {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + '/auth/registo',
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    },
  };
}

export function PASSWORD_LOST(body) {
  return {
    url: API_URL + '/auth/esqueceu-password',
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    },
  };
}

export function VERIFY_PASSWORD_LOST_TOKEN(body) {
  return {
    url: API_URL + '/auth/verificar-token-esqueceu-password',
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    },
  };
}

export function PASSWORD_RESET(body) {
  return {
    url: API_URL + '/auth/recuperar-password',
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    },
  };
}

//ANTENAS

export function ANTENA_GET(token, search) {
  return {
    url: search ? `${API_URL}/antenas?search=${search}` : API_URL + '/antenas',
    options: {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    },
  };
}

export function ANTENA_GET_BY_ID(token, id) {
  return {
    url: API_URL + '/antenas/' + id,
    options: {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    },
  };
}

export function UPDATE_LIKE_ANTENA(token, idAntena, like) {
  return {
    url:
      API_URL + '/user/' + idAntena + `/${like === true ? 'like' : 'unlike'}`,
    options: {
      method: 'PUT',
      headers: { Authorization: 'Bearer ' + token },
    },
  };
}

//COMENTARIOS antena
export function COMMENT_ANTENA(token, idAntena, body) {
  return {
    url: API_URL + '/user/' + idAntena + '/comentario/add',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function DELETE_COMMENT_ANTENA(token, idComentario) {
  return {
    url: API_URL + '/user/' + idComentario + '/comentario/delete',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function GET_COMMENT_ANTENA(token, idAntena) {
  return {
    url: API_URL + '/user/' + idAntena + '/comentarios',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function GET_COMMENT_USER(token) {
  return {
    url: API_URL + '/user/comentarios',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function GET_DETAILS_ANTENA(token, idAntena) {
  return {
    url: API_URL + '/user/' + idAntena + '/detalhes',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

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

export function UPDATE_ANTENA(body) {
  return {
    url: API_URL + '/antenas',
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

export function UPDATE_AVARIA(body) {
  return {
    url: API_URL + '/avarias',
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

export function GET_ALL_COMENTARIO() {
  return {
    url: API_URL + '/comentarios',
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