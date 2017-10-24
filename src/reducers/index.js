import combineReducers from 'redux';

const defaultState = {
  auth: null,
  user: {},
  characters: [],
  currentCharacter: {
    name: '',
    attacks: [],
    saves: [],
    skills: [],
    spells: [],
    stats: [],
  }
};

export default (state = defaultState) => {
  return state;
};
