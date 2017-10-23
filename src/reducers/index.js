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

export default defaultState => {
  return defaultState;
};
