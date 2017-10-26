import React from 'react';
import {connect} from 'react-redux';

import RollOne from '../model-roll-one';
import RollTwo from '../model-roll-two';

const MODAL_COMPONENTS = {
  ROLL_ONE: RollOne,
  ROLL_TWO: RollTwo,
};

class ModalContainer extends React.component{
  constructor(props){
    super(props);
  }


  render(){
    let SpecificModal = MODAL_COMPONENTS[this.props.modal.modalType];
    if (!SpecificModal) {
      return null;
    }
    return <SpecificModal modalProps = {this.props.modal.modalProps} />;
  }
}



const mapStateToProps = state => ({
  modal: state.modal
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps,mapDispatchToProps)(ModalContainer);
