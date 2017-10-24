const initialState = {};
const defaultAction = {};

export default (state = initialState,action = defaultAction) => {
  const { type,payload } = action;

  switch(type){
    case 'TOKEN_SET':
      return {
        ...state,
        auth: payload
      };

    case 'TOKEN_DELETE':
      return {
        ...state,
        auth: null
      };
  }
};
