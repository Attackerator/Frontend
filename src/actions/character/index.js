const request = require('superagent');

const setCharacters = characters => {
  return {
    type: 'CHARACTER_LIST_SET',
    payload: characters
  };
};

const setCurrentCharacter = character => {
  return {
    type: 'CURRENT_CHARACTER__SET',
    payload: character
  };
};

export const getCharacterListRequest = token => dispatch => {
  return request.get(`${API_URL}/api/characters`)
    .set({ Authorization: `Bearer ${token}`})
    .then(res => {
      dispatch(setCharacters(res.body));
    });
};

export const getCharacterRequest = (token,id) => dispatch => {
  return request.get(`${API_URL}/api/character/${id}`)
    .set({ Authorization: `Bearer ${token}`})
    .then(res => {
      dispatch(setCurrentCharacter(res.body));
    });
};

export const deleteCharacterRequest = (token,id) => dispatch => {
  return request.delete(`${API_URL}/api/character/${id}`)
    .set({ Authorization: `Bearer ${token}`})
    .then(res => {
      dispatch(setCurrentCharacter( {
        attacks: [],
        saves: [],
        skills: [],
        spells: []
      }));
    });
};

export const postCharacterRequest = (token,character) => dispatch => {
  return request.post(`${API_URL}/api/character`)
    .set({ Authorization: `Bearer ${token}`})
    .send(character)
    .then(res => {
      dispatch(setCurrentCharacter(res.body));
    });
};

export const putCharacterRequest = (token, id, character) => dispatch => {
  return request.put(`${API_URL}/api/character/${id}`)
    .set({ Authorization: `Bearer ${token}`})
    .send(character)
    .then(res => {
      dispatch(setCurrentCharacter(res.body));
    });
};
