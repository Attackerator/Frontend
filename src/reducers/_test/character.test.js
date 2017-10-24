import deepFreeze from 'deep-freeze';
import reducer from '../character-reducer';

const defaultState = {};
deepFreeze(defaultState);

test('Should set the character to state',() => {
  let state = defaultState;
  let action = {
    type: 'CHARACTER_LIST_SET',
    payload: [
      { name: 'character1' },
      { name: 'character2' }
    ]
  };

  deepFreeze([state,action]);

  let res = reducer(state,action);
  expect(res).toEqual([
    { name: 'character1' },
    { name: 'character2' }
  ]);
});

test('should set the current character',() => {
  let state = {
    characters: [
      { name: 'bob' },
      { name: 'joe' }
    ]
  };
  let action1 = {
    type: 'CURRENT_CHARACTER__SET',
    payload: state.characters[0]
  };
  let action2 = {
    type: 'CURRENT_CHARACTER__SET',
    payload: state.characters[1]
  };
  deepFreeze([state,action1,action2]);

  let res = reducer(state,action1);
  expect(res).toEqual({ name: 'bob' });

  res = reducer(state,action2);
  expect(res).toEqual({ name: 'joe' });
});
