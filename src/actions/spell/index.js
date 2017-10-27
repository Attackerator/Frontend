import * as character from '../character';
import { get_cookie } from '../../lib/helper';

const request = require('superagent');

// TODO: test when creating modal!!
export const postSpellRequest = (charId,spell) => dispatch => {
  let token = get_cookie('token');
  console.log(token);
  return request.post(`${API_URL}/api/spell/${charId}`)
    .set({Authorization: `Bearer ${token}`})
    .send(spell)
    .then(res => {
      dispatch(character.getCharacterRequest(res.body.characterId));
    });
};

export const putSpellRequest = (oldSpell,newSpell) => dispatch => {
  let token = get_cookie('token');
  console.log({oldSpell,newSpell,token});
  return request.put(`${API_URL}/api/spell/${oldSpell._id}`)
    .set({Authorization: `Bearer ${token}`})
    .send(newSpell)
    .then(res => {
      dispatch(character.getCharacterRequest(oldSpell.characterId));
    });
};

export const deleteSpellRequest = spell => dispatch => {
  let token = get_cookie('token');
  return request.delete(`${API_URL}/api/spell/${spell._id}`)
    .set({Authorization: `Bearer ${token}`})
    .then(res => {
      dispatch(character.getCharacterRequest(spell.characterId));
    });
};
