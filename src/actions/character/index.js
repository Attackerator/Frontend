import { get_cookie } from '../../lib/helper';

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

export const getCharacterListRequest = () => dispatch => {
  let token = get_cookie('token');
  return request.get(`${API_URL}/api/characters`)
    .set({ Authorization: `Bearer ${token}`})
    .then(res => {
      dispatch(setCharacters(res.body));
    });
};

export const getCharacterRequest = (id) => dispatch => {
  let token = get_cookie('token');
  return request.get(`${API_URL}/api/character/${id}`)
    .set({ Authorization: `Bearer ${token}`})
    .then(res => {
      document.cookie = `characterId=${res.body._id}`;
      dispatch(setCurrentCharacter(res.body));
    });
};

export const deleteCharacterRequest = (id) => dispatch => {
  let token = get_cookie('token');
  return request.delete(`${API_URL}/api/character/${id}`)
    .set({ Authorization: `Bearer ${token}`})
    .then(res => {
      document.cookie = `characterId=`;
      dispatch(setCurrentCharacter( {
        attacks: [],
        saves: [],
        skills: [],
        spells: []
      }));
    });
};

export const postCharacterRequest = (character) => dispatch => {
  let token = get_cookie('token');
  return request.post(`${API_URL}/api/character`)
    .set({ Authorization: `Bearer ${token}`})
    .send(character)
    .then(res => {
      document.cookie = `characterId=${res.body._id}`;
      dispatch(setCurrentCharacter(res.body));
    });
};

export const putCharacterRequest = (id, character) => dispatch => {
  let token = get_cookie('token');
  return request.put(`${API_URL}/api/character/${id}`)
    .set({ Authorization: `Bearer ${token}`})
    .send(character)
    .then(res => {
      document.cookie = `characterId=${res.body._id}`;
      dispatch(setCurrentCharacter(res.body));
    });
};
