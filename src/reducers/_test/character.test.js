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
  expect(res).toEqual({
    characters: [
      { name: 'character1' },
      { name: 'character2' }
    ]
  })
});
