import * as character from '../character';
import { get_cookie } from '../../lib/helper';

const request = require('superagent');

export const postSkillRequest = skill => {
  let token = get_cookie('token');
  console.log(token);
  return request.post(`${API_URL}/api/skill`)
    .set({Authorization: `Bearer ${token}`})
    .send({ name: 'not medicine', stat: 'intelligence', bonus: 14 })
    .then(res => {
      console.log(res.body);
    });
};

export const putSkillRequest = (oldSkill,newSkill) => {
  let token = get_cookie('token');
  return request.put(`${API_URL}/api/skill/${oldSkill._id}`)
    .set({Authorization: `Bearer ${token}`})
    .send(newSkill)
    .then(res => {
      console.log(res.body);
      return res.body;
    });
};
