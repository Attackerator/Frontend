const defaultState = {};
const defaultAction = {};

export default (state = defaultState, action = defaultAction) => {
  const { type, payload } = action;

  switch(type) {
    case 'USER_SET':
      return payload;
    default:
      return state;
  }
};
