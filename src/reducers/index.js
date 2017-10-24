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
    stats: [{strength: 50, dexterity: 10, constitution: 3, intelligence: 14, wisdom: 32, charisma: 9001, _id: 123 }],
  }
};

export default (state = defaultState) => {
  return state;
};
