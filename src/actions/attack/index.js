import * as character from '../character';
import { get_cookie } from '../../lib/helper';

const request = require('superagent');

export const postAttackRequest = attack => dispatch => {
  let token = get_cookie('token');
  console.log(token);
  return request.post(`${API_URL}/api/attack`)
  .set({Authorization: `Bearer ${token}`})
  .send({ name: 'Wham Wham', stat: 'strength', damageType: 'blunt', diceType: 20,
    diceCount: 20, toHitBonus: 20, damageBonus: 200 })
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
  .then(res => dispatch => {
    dispatch(character.getCharacterListRequest(attack.characterId));
  });
};
