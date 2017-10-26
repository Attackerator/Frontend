import deepFreeze from 'deep-freeze';
import reducer from '../user-reducer';

const defaultState = {};
deepFreeze(defaultState);

test('',() => {
  let state = defaultState;
  let action = {
    type: 'USER_SET',
    payload: { username: 'dustinyschild', email: 'dy@ex.com' }
  };
  deepFreeze([state,action]);

  let res = reducer(state,action);
  expect(res).toEqual({ username: 'dustinyschild', email: 'dy@ex.com' });
});
