const request = require('superagent');

const setCharacters = characters => {
  return {
    type: 'CHARACTER_LIST_SET',
    payload: characters
  };
};

export const getCharactersRequest = token => dispatch => {
  return request.get(`${API_URL}/api/characters`)
    .set({ Authorization: `Bearer ${token}`})
    .then(res => {
      dispatch(setCharacters(res.body));
    });
};
