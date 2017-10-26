import './_attack-container.scss';

import React from 'react';
import { connect } from 'react-redux';
import AttackItem from '../attack-item';

import * as attackActions from '../../actions/attack';

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
          this.props.character.attack.map(attack => {
            return(
              <AttackItem
                key={attack._id}
                attack={attack}
                character={this.props.character}
                actions={
                {
                  addAttack: this.props.addAttack,
                  editAttack: this.props.putAttack,
                  deleteAttack: this.props.deleteAttack
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
  addAttack: attack => dispatch(attackActions.postAttackRequest(attack)),
  putAttack: (oldAttack, newAttack) => dispatch(attackActions.putAttackRequest(oldAttack, newAttack)),
  deleteAttack: attack => dispatch(attackActions.deleteAttackRequest(attack))
});

export default connect(mapStateToProps,mapDispatchToProps)(AttackContainer);
