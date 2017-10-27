import * as character from '../character';
import { get_cookie } from '../../lib/helper';

const request = require('superagent');

export const postSkillRequest = (charId,skill) => dispatch => {
  let token = get_cookie('token');
  return request.post(`${API_URL}/api/skill/${charId}`)
    .set({Authorization: `Bearer ${token}`})
    .send(skill)
    .then(res => {
      console.log({skill});
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
    .then(res => {
      dispatch(character.getCharacterRequest(skill.characterId));
    });
};
