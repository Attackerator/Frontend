import './_modal-roll-one.scss';

import React from 'react';
import { randomRoll } from '../../lib/dice';
import { connect } from 'react-redux';
import { hideThisModal } from '../../actions/modal';

class RollOne extends React.Component{
  constructor(props){
    super(props);

    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    this.props.hideThisModal();
  }

  render(){
    let roll = randomRoll(20);
    let modifier = this.props.modalProps.modifer;
    let bonus = this.props.modalProps.bonus;
    return(
      <div>
        <div>Total: {roll+modifier+bonus}</div>
        <div>Roll: {roll}</div>
        <div>Bonuses: {modifier+bonus}</div>
        <button className="closeModal" onClick={this.handleClick}>Close</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  character: state.currentCharacter
});

const mapDispatchToProps = (dispatch) => ({
  hideThisModal: () => dispatch(hideThisModal()),
});

export default connect(mapStateToProps,mapDispatchToProps)(RollOne);
