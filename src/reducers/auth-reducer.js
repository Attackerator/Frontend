const initialState = null;
const defaultAction = {};

export default (state = initialState,action = defaultAction) => {
  const { type,payload } = action;

  switch(type){
    case 'TOKEN_SET':
      return payload;

    case 'TOKEN_DELETE':
      return null;
    default:
      return state;
  }
};
