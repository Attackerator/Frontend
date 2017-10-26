import './_spell-container.scss';

import React from 'react';
import { connect } from 'react-redux';
import SpellItem from '../spell-item';

import * as spellActions from '../../actions/spell';

class SpellContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="spells">
        <h2>Spells</h2>
        <button className="new">New</button>
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
