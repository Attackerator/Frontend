import './_attack-item.scss';

import React from 'react';
import RollButton from '../roll-button';

export default class AttackItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: this.props.attack.name,
      stat: this.props.attack.stat,
      damageType: this.props.attack.damageType,
      diceType: this.props.attack.diceType,
      diceCount: this.props.attack.diceCount,
      description: this.props.attack.description,
      toHitBonus: this.props.attack.toHitBonus,
      damageBonus: this.props.attack.damageBonus,
      edit: false,
      expand: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  toggleEdit(){
    this.setState({
      edit: !this.state.edit
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.editAttack(
      this.props.attack,
      {
        name: this.state.name,
        description: this.state.description,
        stat: this.state.stat,
        damageType: this.state.damageType,
        diceType: this.state.diceType,
        diceCount: this.state.diceCount,
        toHitBonus: this.state.toHitBonus,
        damageBonus: this.state.damageBonus

      });
    this.setState({ edit: false });
  }

  handleDelete(){
    this.props.actions.deleteAttack(this.props.attack);
  }

  handleExpand(){
    this.setState({
      expand: !this.state.expand
    });
  }

  render(){
    return(
      <div className="attackItem">
        <div className="main">
          <RollButton modalType={'ROLL_TWO'} modalProps={{hitModifier: Math.floor((this.props.character.stats[0][this.props.attack.stat.toLowerCase()]-10)/2), hitBonus: this.props.attack.toHitBonus, diceType: this.props.attack.diceType, diceCount: this.props.attack.diceCount, dmgBonus: this.props.attack.damageBonus,}} />
          <h3>{this.props.attack.name}</h3>
          <button onClick={this.handleExpand}>{this.state.expand ? '-' : '+' }</button>
        </div>
        {
          this.state.expand ?
            <div className="content">
              <ul>
                <li>{this.props.attack.description}</li>
                <li>Damage: {this.props.attack.diceCount}d{this.props.attack.diceType} + {this.props.attack.damageBonus}</li>
                <li>Damage Type: {this.props.attack.damageType}</li>
                <li>Hit Bonus: {this.props.attack.toHitBonus}</li>
                <li>{this.props.attack.stat}</li>
              </ul>
              <button className="edit" onClick={this.toggleEdit}><i className="fa fa-pencil" aria-hidden="true"></i></button>
              <button className="delete" onClick={this.handleDelete}><i className="fa fa-trash" aria-hidden="true"></i></button>
              {
                this.state.edit ?
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      name="description"
                      value={this.state.description}
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      name="diceCount"
                      value={this.state.diceCount}
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      name="diceType"
                      value={this.state.diceType}
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      name="damageBonus"
                      value={this.state.damageBonus}
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      name="damageType"
                      value={this.state.damageType}
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      name="toHitBonus"
                      value={this.state.toHitBonus}
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      name="stat"
                      value={this.state.stat}
                      onChange={this.handleChange}
                    />
                    <button type="submit">Submit Change</button>
                  </form> :
                  <div>
                  </div>
              }
            </div> :
            <div>
            </div>
        }
      </div>
    );
  }
}
