import './_spell-container.scss';

import React from 'react';
import { connect } from 'react-redux';
import SpellItem from '../spell-item';

import * as spellActions from '../../actions/spell';

class SpellContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      toggleForm: false,
      name: '',
      description: '',
      diceCount: '',
      diceType: '',
      damageBonus: '',
      damageType: '',
      toHitBonus: '',
      stat: 'strength'
    };

    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange =  this.handleChange.bind(this);
  }

  handleToggleForm(){
    this.setState({ toggleForm: !this.state.toggleForm});
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addSpell(
      this.props.character._id,
      {
        name: this.state.name,
        description: this.state.description,
        diceCount: this.state.diceCount,
        diceType: this.state.diceType,
        damageBonus: this.state.damageBonus,
        damageType: this.state.damageType,
        toHitBonus: this.state.toHitBonus,
        stat: this.state.stat
      }
    );
    this.setState({
      toggleForm: false,
      name: '',
      description: '',
      diceCount: '',
      diceType: '',
      damageBonus: '',
      damageType: '',
      toHitBonus: '',
      stat: ''
    });
  }

  render(){
    return(
      <div className="spells">
        <h2>Spells</h2>
        <button className="new" onClick={this.handleToggleForm}>New</button>
        {
          this.state.toggleForm ?
            <form onSubmit={this.handleSubmit}>
              <label>Name:
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Spell Name"
                />
              </label>
              <label>Description:
                <input
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  placeholder="Description"
                />
              </label>
              <label>Dmg Dice Count:
                <input
                  type="number"
                  name="diceCount"
                  value={this.state.diceCount}
                  onChange={this.handleChange}
                  placeholder="Dice Count"
                />
              </label>
              <label>Dmg Dice Type:
                <input
                  type="number"
                  name="diceType"
                  value={this.state.diceType}
                  onChange={this.handleChange}
                  placeholder="Dice Type"
                />
              </label>
              <label>Dmg Bonus:
                <input
                  type="number"
                  name="damageBonus"
                  value={this.state.damageBonus}
                  onChange={this.handleChange}
                  placeholder="Damage Bonus"
                />
              </label>
              <label>Dmg Type:
                <input
                  type="text"
                  name="damageType"
                  value={this.state.damageType}
                  onChange={this.handleChange}
                  placeholder="Damage Type"
                />
              </label>
              <label>Hit Bonus:
                <input
                  type="number"
                  name="toHitBonus"
                  value={this.state.toHitBonus}
                  onChange={this.handleChange}
                  placeholder="To Hit Bonus"
                />
              </label>
              <label>Stat:
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
              </label>
              <button type="submit" onSubmit={this.handleSubmit}>Submit Change</button>
            </form> :
            <div></div>
        }
        <div className="wrapper">
          {
            this.props.character.spells.map(spell => {
              return(
                <SpellItem
                  key={spell._id}
                  spell={spell}
                  character={this.props.character}
                  actions={
                    {
                      addSpell: this.props.addSpell,
                      editSpell: this.props.putSpell,
                      deleteSpell: this.props.deleteSpell
                    }
                  }
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  character: state.currentCharacter
});

const mapDispatchToProps = dispatch => ({
  addSpell: (charId,spell) => dispatch(spellActions.postSpellRequest(charId,spell)),
  putSpell: (oldSpell,newSpell) => dispatch(spellActions.putSpellRequest(oldSpell,newSpell)),
  deleteSpell: oldSpell => dispatch(spellActions.deleteSpellRequest(oldSpell))
});

export default connect(mapStateToProps,mapDispatchToProps)(SpellContainer);
