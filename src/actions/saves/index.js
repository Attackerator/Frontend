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
