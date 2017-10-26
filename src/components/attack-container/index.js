import './_attack-container.scss';

import React from 'react';
import { connect } from 'react-redux';
import AttackItem from '../attack-item';

import * as attackActions from '../../actions/attack';

class AttackContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      toggleNew: false,
      name: '',
      description: '',
      diceCount: '',
      diceType: '',
      damageBonus: '',
      damageType: '',
      toHitBonus: '',
      stat: ''
    };

    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggleForm(){
    this.setState({ toggleNew: !this.state.toggleNew });
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addAttack(
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
      toggleNew: false,
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
      <div className="attack">
        <h2>Attacks</h2>
        <button className="new" onClick={this.handleToggleForm}>New</button>
        {
          this.state.toggleNew ?
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Name"
              />
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                placeholder="Description"
              />
              <input
                type="text"
                name="diceCount"
                value={this.state.diceCount}
                onChange={this.handleChange}
                placeholder="Dice Count"
              />
              <input
                type="text"
                name="diceType"
                value={this.state.diceType}
                onChange={this.handleChange}
                placeholder="Dice Type"
              />
              <input
                type="text"
                name="damageBonus"
                value={this.state.damageBonus}
                onChange={this.handleChange}
                placeholder="Damage Bonus"
              />
              <input
                type="text"
                name="damageType"
                value={this.state.damageType}
                onChange={this.handleChange}
                placeholder="Damage Type"
              />
              <input
                type="text"
                name="toHitBonus"
                value={this.state.toHitBonus}
                onChange={this.handleChange}
                placeholder="Hit Bonus"
              />
              <input
                type="text"
                name="stat"
                value={this.state.stat}
                onChange={this.handleChange}
                placeholder="stat"
              />
              <button type="submit">Submit Change</button>
            </form> :
            <div></div>
        }
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
  addAttack: (charId,attack) => dispatch(attackActions.postAttackRequest((charId,attack))),
  putAttack: (oldAttack, newAttack) => dispatch(attackActions.putAttackRequest(oldAttack, newAttack)),
  deleteAttack: attack => dispatch(attackActions.deleteAttackRequest(attack))
});

export default connect(mapStateToProps,mapDispatchToProps)(AttackContainer);
