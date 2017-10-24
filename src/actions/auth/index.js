
console.log({API_URL})

const request = require('superagent');

const validate = (username,password) => {
  if(!username) throw new Error('Username is required');
  if(!password) throw new Error('Password is required');

};

const setToken = token => {
  return {
    type: 'TOKEN_SET',
    payload: token
  };
};

export const signInRequest = loginInfo =>
  dispatch => {
    const { username,password } = loginInfo;
    return request.get(`${API_URL}/api/signin`)
      .auth(username,password)
      .then(res => {
        dispatch(setToken(res.text));
        return getCharactersRequest(res.text);
      });
  };

export const getCharactersRequest = token => dispatch => {
  return request.get(`${API_URL}/api/characters`)
    .set({ Authorization: `Bearer ${token}`})
    .then(res => {
      console.log(res.body);
    });
};
