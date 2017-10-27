import './_skill-container.scss';

import React from 'react';
import { connect } from 'react-redux';
import SkillItem from '../skill-item';

import * as skillActions from '../../actions/skill';

class SkillContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      toggleForm: false,
      name: '',
      bonus: '',
      stat: 'strength'
    };

    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggleForm(){
    this.setState({ toggleForm: !this.state.toggleForm });
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addSkill(
      this.props.character._id,
      {
        name: this.state.name,
        bonus: this.state.bonus,
        stat: this.state.stat
      });
    this.setState({
      toggleForm: false,
      name: '',
      bonus: '',
      stat: ''
    });
  }

  render(){
    return(
      <div className="skills">
        <h2>Skills</h2>
        <button className="new" onClick={this.handleToggleForm}>New</button>
        <div className="formWrap">
          {
            this.state.toggleForm ?
              <form onSubmit={this.handleSubmit}>
                <label>Skill Name:
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Name"
                  />
                </label>
                <label>Bonus:
                  <input
                    type="number"
                    name="bonus"
                    value={this.state.bonus}
                    onChange={this.handleChange}
                    placeholder="Bonus"
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
                <button type="submit">Submit Change</button>
              </form> :
              <div></div>
          }
        </div>
        {
          this.props.character.skills.map(skill => {
            return(
              <SkillItem
                key={skill._id}
                skill={skill}
                character={this.props.character}
                actions={
                  {
                    addSkill: this.props.addSkill,
                    editSkill: this.props.putSkill,
                    deleteSkill: this.props.deleteSkill
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
  addSkill: (charId,skill) => dispatch(skillActions.postSkillRequest(charId,skill)),
  putSkill: (oldSkill,newSkill) => dispatch(skillActions.putSkillRequest(oldSkill,newSkill)),
  deleteSkill: oldSkill => dispatch(skillActions.deleteSkillRequest(oldSkill))
});

export default connect(mapStateToProps,mapDispatchToProps)(SkillContainer);
