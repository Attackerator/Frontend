
export const setUserState = user => {
  return {
    type: 'USER_SET',
    payload: user
  };
};

export const setUser = user => dispatch => {
  window.localStorage.setItem('user',JSON.stringify(user));
  dispatch(setUserState(user));
};
