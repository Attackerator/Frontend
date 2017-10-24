import './_spell-item.scss';

import React from 'react';

export default class SpellItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="spellItem">
        <button className="roll">Roll</button>
        <h3>{this.props.spell.name}</h3>
        <div className="hideMe">
          <ul>
            <li>{this.props.spell.description}</li>
            <li>Damage: {this.props.spell.diceCount}d{this.props.spell.diceType} + {this.props.spell.damageBonus}</li>
            <li>Damage Type: {this.props.spell.damageType}</li>
            <li>Hit Bonus: {this.props.spell.toHitBonus}</li>
            <li>{this.props.spell.stat}</li>
          </ul>
          <button className="edit">edit</button>
          <button className="delete">delete</button>
        </div>
      </div>
    );
  }
}
