import React from 'react';
import { randomRoll } from '../../lib/dice';

export default class RollOne extends React.Component{
  constructor(props){
    super(props);
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
      </div>
    );
  }
}
