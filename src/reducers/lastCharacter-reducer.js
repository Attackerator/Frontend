const defaultState = {};
const defaultAction = {};

export default (state = defaultState,action = defaultAction) => {
  const { type,payload } = action;

  switch(type){
    case 'LAST_CHARACTER__SET':
      return payload;
    default:
      return state;
  }
};
