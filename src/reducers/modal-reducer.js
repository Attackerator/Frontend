const initialState = {
  modalType: null,
  modalProps: {}
};
const defaultAction = {};

export default(state = initialState, action = defaultAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'SHOW_MODAL':
      return {
        modalType: payload.modalType,
        modalProps: payload.modalProps
      };
    case 'HIDE_MODAL':
      return initialState;
    default:
      return state;
  }
};
