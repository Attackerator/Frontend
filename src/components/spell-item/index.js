import './_spell-item.scss';

import React from 'react';

export default class SpellItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="spellItem">
        <div className="main">
          <button className="roll"><i className="fa fa-bolt" aria-hidden="true"></i></button>
          <h3>{this.props.spell.name}</h3>
          <i className="fa fa-plus-square-o" aria-hidden="true"></i>
        </div>
        <div className="hideMe" className="content">
          <ul>
            <li>{this.props.spell.description}</li>
            <li>Damage: {this.props.spell.diceCount}d{this.props.spell.diceType} + {this.props.spell.damageBonus}</li>
            <li>Damage Type: {this.props.spell.damageType}</li>
            <li>Hit Bonus: {this.props.spell.toHitBonus}</li>
            <li>{this.props.spell.stat}</li>
          </ul>
          <button className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button className="delete"><i className="fa fa-trash" aria-hidden="true"></i></button>
        </div>
      </div>
    );
  }
}
