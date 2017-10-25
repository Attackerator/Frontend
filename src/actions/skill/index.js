import * as character from '../character';

const request = require('superagent');

const get_cookie = (cookie_name) => {
  var cookie_string = document.cookie ;
  if (cookie_string.length != 0) {
    var cookie_value = cookie_string.match ( '(^|;)[\s]*' + cookie_name + '=([^;]*)' );
    return decodeURIComponent ( cookie_value[2] ) ;
  }
  return '' ;
};

export const getToken = skill => {
  let token = get_cookie('token');
  //return request.post(`${API_URL}/api/skill`)
    //.set({Authorization: `Bearer `})
};
