import * as character from '../character';
import { get_cookie } from '../../lib/helper';

const request = require('superagent');

// TODO: test when creating modal!!
export const postSkillRequest = skill => dispatch => {
  let token = get_cookie('token');
  console.log(token);
  return request.post(`${API_URL}/api/skill`)
    .set({Authorization: `Bearer ${token}`})
    .send({ name: 'not medicine', stat: 'intelligence', bonus: 14 })
    .then(res => {
      dispatch(character.getCharacterRequest(res.body.characterId));
    });
};

export const putSkillRequest = (oldSkill,newSkill) => dispatch => {
  let token = get_cookie('token');
  console.log({oldSkill,newSkill,token});
  return request.put(`${API_URL}/api/skill/${oldSkill._id}`)
    .set({Authorization: `Bearer ${token}`})
    .send(newSkill)
    .then(res => {
      dispatch(character.getCharacterRequest(oldSkill.characterId));
    });
};

export const deleteSkillRequest = skill => dispatch => {
  let token = get_cookie('token');
  return request.delete(`${API_URL}/api/skill/${skill._id}`)
    .set({Authorization: `Bearer ${token}`})
    .then(res => dispatch => {
      dispatch(character.getCharacterRequest(skill.characterId));
    });
};
