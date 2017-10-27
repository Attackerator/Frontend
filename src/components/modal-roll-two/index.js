import './_modal-roll-two.scss';

import React from 'react';
import { randomRoll, rollManyDice } from '../../lib/dice';
import { connect } from 'react-redux';
import { hideThisModal } from '../../actions/modal';

class RollTwo extends React.Component{
  constructor(props){
    super(props);

    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    this.props.hideThisModal();
  }

  render(){
    let hitRoll = randomRoll(20);
    let hitModifier = this.props.modalProps.hitModifier;
    let hitBbonus = this.props.modalProps.hitBbonus;
    let dmgRoll = rollManyDice(this.props.modalProps.diceCount, this.props.modalProps.diceType);
    let dmgModifier = this.props.modalProps.dmgModifier;
    let dmgBbonus = this.props.modalProps.dmgBbonus;
    return(
      <div>
        <div>Hit Total: {hitRoll+hitModifier+hitBbonus}</div>
        <div>Hit Roll: {hitRoll}</div>
        <div>Hit Bonuses: {hitModifier+hitBbonus}</div>
        <div>Dmg Total: </div>
        <div>Dmg Roll: </div>
        <div>Dmg Bonuses: </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(RollTwo);
