import combineReducers from 'redux';

const defaultState = {
  auth: null,
  user: {},
  characters: [],
  currentCharacter: {
    attacks: [],
    saves: [],
    skills: [],
    spells: []
  }
};

export default (state = defaultState) => {
  return state;
};
