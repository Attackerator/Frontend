import deepFreeze from 'deep-freeze';
import reducer from '../user-reducer';

const defaultState = {};
deepFreeze(defaultState);

test('should set the user state',() => {
  let state = defaultState;
  let action = {
    type: 'USER_SET',
    payload: { username: 'dustinyschild', email: 'dy@ex.com' }
  };
  deepFreeze([state,action]);

  let res = reducer(state,action);
  expect(res).toEqual({ username: 'dustinyschild', email: 'dy@ex.com' });
});

test('should return the current state if the action is unknown',() => {
  let state = defaultState;
  let action = {
    type: 'UNKNKOWN',
  };
  deepFreeze([state,action]);

  let res = reducer(state,action);
  expect(res).toEqual(defaultState);
});

test('should reset the state if the state passed is undefined',() => {
  let state = undefined;
  let action = { type: 'ANY' };
  deepFreeze([state,action]);

  let res = reducer(state,action);
  expect(res).toEqual(defaultState);
});
