import deepFreeze from 'deep-freeze';
import reducer from '../auth-reducer';

const defaultState = {};
deepFreeze(defaultState);

test('Should save a token',() => {
  let state = defaultState;
  let action = {
    type: 'TOKEN_SET',
    payload: 'thisisatoken'
  };

  deepFreeze([state,action]);

  const res = reducer(state,action);
  expect(res).toEqual('thisisatoken');
});

test('Should delete the token',() => {
  let state = { auth: 'thisisatoken' };
  let action = { type: 'TOKEN_DELETE' };

  deepFreeze([state,action]);

  const res = reducer(state,action);
  expect(res).toEqual( null )
});

test('Unknown action shoud return state',() => {
  let state = { auth: 'thisisatoken' };
  let action = {
    type: 'UNKNOWN'
  };

  deepFreeze([state,action]);

  let res = reducer(state,action);
  expect(res).toEqual({ auth: 'thisisatoken' });
});
