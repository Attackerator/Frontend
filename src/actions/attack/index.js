import * as character from '../character';
import { get_cookie } from '../../lib/helper';

const request = require('superagent');

export const postAttackRequest = (charId,attack) => dispatch => {
  console.log({charId,attack});
  let token = get_cookie('token');
  return request.post(`${API_URL}/api/attack/${charId}`)
    .set({Authorization: `Bearer ${token}`})
    .send(attack)
    .then(res => {
      dispatch(character.getCharacterRequest(res.body.characterId));
    });
};

export const putAttackRequest = (oldAttack, newAttack) => dispatch => {
  let token = get_cookie('token');
  console.log({oldAttack, newAttack, token});
  return request.put(`${API_URL}/api/attack/${oldAttack._id}`)
    .set({Authorization: `Bearer ${token}`})
    .send(newAttack)
    .then(res => {
      dispatch(character.getCharacterRequest(oldAttack.characterId));
    });
};

export const deleteAttackRequest = attack => dispatch => {
  let token = get_cookie('token');
  return request.delete(`${API_URL}/api/attack/${attack._id}`)
    .set({Authorization: `Bearer ${token}`})
    .then(res => {
      dispatch(character.getCharacterRequest(attack.characterId));
    });
};
