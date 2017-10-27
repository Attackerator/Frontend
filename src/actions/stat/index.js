import * as character from '../character';
import { get_cookie } from '../../lib/helper';

const request = require('superagent');

<<<<<<< 3a8c08951c5d989fa0c5ae4ba1ed65cd4e58725b
export const putStatsRequest = (id,newStats) => dispatch => {
  let token = get_cookie('token');
  return request.put(`${API_URL}/api/stats/${id}`)
    .set({Authorization: `Bearer ${token}`})
    .send(newStats)
=======
export const postStatRequest = (charId,stat) => dispatch => {
  let token = get_cookie('token');
  console.log(token);
  return request.post(`${API_URL}/api/stat/${charId}`)
    .set({Authorization: `Bearer ${token}`})
    .send(stat)
>>>>>>> added post route for stats
    .then(res => {
      dispatch(character.getCharacterRequest(res.body.characterId));
    });
};
