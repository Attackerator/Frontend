import './_attack-container.scss';

import React from 'react';
import { connect } from 'react-redux';
import AttackItem from '../attack-item';

class AttackContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="attack">
        <h2>Attacks</h2>
        <button className="new">New</button>
        {
          this.props.character.attacks.map(attack => {
            return(
              <AttackItem key={attack._id} attack={attack} character={this.props.character}/>
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  character: state.defaultStateReducer.currentCharacter
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps,mapDispatchToProps)(AttackContainer);
