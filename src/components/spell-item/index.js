import './_spell-item.scss';

import React from 'react';
import RollButton from '../roll-button';

export default class SpellItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: this.props.spell.name,
      description: this.props.spell.description,
      diceCount: this.props.spell.diceCount,
      diceType: this.props.spell.diceType,
      damageBonus: this.props.spell.damageBonus,
      damageType: this.props.spell.damageType,
      toHitBonus: this.props.spell.toHitBonus,
      stat: this.props.spell.stat,
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

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.actions.editSpell(
      this.props.spell,
      {
        name: this.state.name,
        description: this.state.description,
        diceCount: this.state.diceCount,
        diceType: this.state.diceType,
        damageBonus: this.state.damageBonus,
        damageType: this.state.damageType,
        toHitBonus: this.state.toHitBonus,
        stat: this.state.stat
      });
    this.setState({ edit: false });
  }

  handleDelete(){
    this.props.actions.deleteSpell(this.props.spell);
  }

  handleExpand(){
    this.setState({
      expand: !this.state.expand
    });
  }

  render(){
    return(
      <div className="spellItem">
        <div className="main">
          <RollButton modalType={'ROLL_TWO'} modalProps={{hitModifier: Math.floor((this.props.character.stats[0][this.props.spell.stat.toLowerCase()]-10)/2), hitBonus: this.props.spell.toHitBonus, diceType: this.props.spell.diceType, diceCount: this.props.spell.diceCount, dmgBonus: this.props.spell.damageBonus,}} />
          <h3>{this.props.spell.name}</h3>
          <button onClick={this.handleExpand}>{this.state.expand ? '-' : '+' }</button>
        </div>
        {
          this.state.expand ?
            <div className="content">
              <ul>
                <li>{this.props.spell.description}</li>
                <li>Damage: {this.props.spell.diceCount}d{this.props.spell.diceType} + {this.props.spell.damageBonus}</li>
                <li>Damage Type: {this.props.spell.damageType}</li>
                <li>Hit Bonus: {this.props.spell.toHitBonus}</li>
                <li>{this.props.spell.stat}</li>
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
                      type="number"
                      name="diceCount"
                      value={this.state.diceCount}
                      onChange={this.handleChange}
                    />
                    <input
                      type="number"
                      name="diceType"
                      value={this.state.diceType}
                      onChange={this.handleChange}
                    />
                    <input
                      type="number"
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
                      type="number"
                      name="toHitBonus"
                      value={this.state.toHitBonus}
                      onChange={this.handleChange}
                    />
                    <select
                      name="stat"
                      value={this.state.stat}
                      onChange={this.handleChange}
                      placeholder="stat"
                    >
                      <option name="strength" value="strength">Strength</option>
                      <option name="dexterity" value="dexterity">Dexterity</option>
                      <option name="constitution" value="constitution">Constitution</option>
                      <option name="intelligence" value="intelligence">Intelligence</option>
                      <option name="charisma" value="charisma">Charisma</option>
                      <option name="wisdom" value="wisdom">Wisdom</option>
                    </select>
                    <button type="submit">Submit Change</button>
                  </form> :
                  <div></div>
              }
            </div> : null
        }
      </div>
    );
  }
}
