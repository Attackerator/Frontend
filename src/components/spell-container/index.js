import React from 'react';
import { connect } from 'react-redux';

class SpellContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="charcter">
        <h2>Spells</h2>
        {
          this.props.character.spells.map(spell => {
            return(
              <SpellItem spell={spell} character={this.props.character}/>
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //character: state.currentCharacter
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps,mapDispatchToProps)(SpellContainer);
