import './_spell-container.scss';

import React from 'react';
import { connect } from 'react-redux';
import SpellItem from '../spell-item';

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
              <SpellItem key={spell._id} spell={spell} character={this.props.character}/>
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

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps,mapDispatchToProps)(SpellContainer);
