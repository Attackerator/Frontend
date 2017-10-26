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
      stat: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange =  this.handleChange.bind(this);
  }

  render(){
    return(
      <div className="spells">
        <h2>Spells</h2>
        <button className="new">New</button>
        {
          this.state.toggleForm ?
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
              <button type="submit" onSubmit={this.handleSubmit}>Submit Change</button>
            </form> :
            <div></div>
        }
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
    );
  }
}

const mapStateToProps = state => ({
  character: state.currentCharacter
});

const mapDispatchToProps = dispatch => ({
  addSpell: spell => dispatch(spellActions.postSpellRequest(spell)),
  putSpell: (oldSpell,newSpell) => dispatch(spellActions.putSpellRequest(oldSpell,newSpell)),
  deleteSpell: oldSpell => dispatch(spellActions.deleteSpellRequest(oldSpell))
});

export default connect(mapStateToProps,mapDispatchToProps)(SpellContainer);
