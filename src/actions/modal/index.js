
const showModal = modal => {
  return {
    type: 'SHOW_MODAL',
    payload: modal
  };
};

const hideModal = () => {
  return {
    type: 'HIDE_MODAL',
    payload: null
  };
};

export const showSpecificModal = (modalType, modalProps) => dispatch => {
  let modal = {
    modalType: modalType,
    modalProps: modalProps
  };
  dispatch(showModal(modal));
};

export const hideThisModal = () => dispatch => {
  dispatch(hideModal());
};
