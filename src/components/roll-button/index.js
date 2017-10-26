import './_roll-button.scss';

import { connect } from 'react-redux';
import React from 'react';
import { showSpecificModal } from '../../actions/modal';

class RollButton extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <button className="roll"><i className="fa fa-bolt" aria-hidden="true"></i></button>
    );
  }
}

const mapStateToProps = state => ({
  character: state.currentCharacter
});

const mapDispatchToProps = (dispatch) => ({
  showSpecificModal: (modalType,modalProps) => dispatch(showSpecificModal(modalType,modalProps)),
});

export default connect(mapStateToProps,mapDispatchToProps)(RollButton);
