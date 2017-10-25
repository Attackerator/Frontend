import './_attack-item.scss';

import React from 'react';

export default class AttackItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="attackItem">
        <div className="main">
          <button className="roll"><i className="fa fa-bolt" aria-hidden="true"></i></button>
          <h3>{this.props.attack.name}</h3>
          <i className="fa fa-plus-square-o" aria-hidden="true"></i>
        </div>
        <div className="hideMe" className="content">
          <ul>
            <ul>
              <li>{this.props.attack.description}</li>
              <li>Damage: {this.props.attack.diceCount}d{this.props.attack.diceType} + {this.props.attack.damageBonus}</li>
              <li>Damage Type: {this.props.attack.damageType}</li>
              <li>Hit Bonus: {this.props.attack.toHitBonus}</li>
              <li>{this.props.attack.stat}</li>
            </ul>
          </ul>
          <button className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button className="delete"><i className="fa fa-trash" aria-hidden="true"></i>
</button>
        </div>
        <div className="footer">
        </div>
      </div>
    );
  }
}
