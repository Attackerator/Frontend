import * as character from '../character';

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
        document.cookie = `token=${res.text}`;
        dispatch(setToken(res.text));
        dispatch(character.getCharacterListRequest(res.text));
      });
  };

export const signUpRequest = signUpInfo =>
  dispatch => {
    return request.post(`${API_URL}/api/user`)
      .send(signUpInfo)
      .then(res => {
        document.cookie = `token=${res.text}`;
        dispatch(setToken(res.text));
        //initialize Characters
      });
  };
