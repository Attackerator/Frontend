import React from 'react';
import { connect } from 'react-redux';

class AttackContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="attack">
        <h2>Attacks</h2>
        {
          this.props.character.attacks.map(attack => {
            return(
              <AttackItem attack={attack} character={this.props.character}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(AttackContainer);
