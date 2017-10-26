
const showModal = modal => {
  return {
    type: 'SHOW_MODAL',
    payload: modal
  };
};

export const showSpecificModal = (modalType, modalProps) => dispatch => {
  let modal = {
    modalType: modalType,
    modalProps: modalProps
  };
  dispatch(showModal(modal));
};
