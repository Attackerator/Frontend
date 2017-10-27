import * as character from '../character';
import { get_cookie } from '../../lib/helper';

const request = require('superagent');

export const putStatsRequest = (id,newStats) => dispatch => {
  let token = get_cookie('token');
  return request.put(`${API_URL}/api/stats/${id}`)
    .set({Authorization: `Bearer ${token}`})
    .send(newStats)
    .then(res => {
      dispatch(character.getCharacterRequest(res.body.characterId));
    });
};

export const postStatRequest = (charId,stat) => dispatch => {
  let token = get_cookie('token');
  return request.post(`${API_URL}/api/stats/${charId}`)
    .set({Authorization: `Bearer ${token}`})
    .send(stat)
    .then(res => {
      dispatch(character.getCharacterRequest(res.body.characterId));
    });
};
