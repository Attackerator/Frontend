import * as character from '../character';
import { get_cookie } from '../../lib/helper';

const request = require('superagent');

export const postAttackRequest = attack => dispatch => {
    let token = get_cookie('token');

}