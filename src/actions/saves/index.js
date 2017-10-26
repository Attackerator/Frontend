import * as character from '../character';
import { get_cookie } from '../../lib/helper';

const request = require('superagent');

export const postSaveRequest = save => dispatch => {
  let token = get_cookie('token');
  console.log(token);
  return request.post(`${API_URL}/api/save`)
  .set({Authorization: `Bearer ${token}`})
  .send(save)
  .then(res => {
    dispatch(character.getCharacterRequest(res.body.characterId));
  });
};

export const putSaveRequest = (oldSave,newSave) => dispatch => {
  let token = get_cookie('token');
  console.log({oldSave,newSave, token});
  return request.put(`${API_URL}/api/save/${oldSave._id}`)
  .set({Authorization: `Bearer ${token}`})
  .send(newSave)
  .then(res => {
    dispatch(character.getCharacterRequest(oldSave.characterId));
  });
};
