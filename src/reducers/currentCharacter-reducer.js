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
const defaultAction = {};

export default (state = defaultState,action = defaultAction) => {
  const { type,payload } = action;

  switch(type){
    case 'CURRENT_CHARACTER__SET':
      return payload;
    default:
      return state;
  }
};
