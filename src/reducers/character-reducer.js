const defaultState = {};
const defaultAction = {};

export default (state = defaultState,action = defaultAction) => {
  const { type,payload } = action;

  switch(type){
    case 'CHARACTER_LIST_SET':
      return {
        ...state,
        characters: payload
      };
    default:
      return state;
  }
};
