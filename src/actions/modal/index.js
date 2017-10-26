
const showModal = action => {
  return {
    type: 'SHOW_MODAL',
    payload: action
  };
};

export const showSpecificModal = (modalType, modalProps) => dispatch => {
  let action = {
    modalType: modalType,
    modalProps: modalProps
  };
  dispatch(showModal(action));
};
