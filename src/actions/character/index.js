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

export const getCharactersRequest = token => dispatch => {
  return request.get(`${API_URL}/api/characters`)
    .set({ Authorization: `Bearer ${token}`})
    .then(res => {
      dispatch(setCharacters(res.body));
      dispatch(setCurrentCharacter(res.body[0] || null));
    });
};
