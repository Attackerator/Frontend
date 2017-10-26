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
      stat: ''
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
    this.props.addSkill({
      name: this.state.name,
      bonus: this.state.bonus,
      stat: this.state.stat
    });
  }

  render(){
    return(
      <div className="skills">
        <h2>Skills</h2>
        <button className="new" onClick={this.handleToggleForm}>New</button>
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
                name="bonus"
                value={this.state.bonus}
                onChange={this.handleChange}
              /><input
                type="text"
                name="stat"
                value={this.state.stat}
                onChange={this.handleChange}
              />
              <button type="submit">Submit Change</button>
            </form> :
            <div></div>
        }
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
  addSkill: skill => dispatch(skillActions.postSkillRequest(skill)),
  putSkill: (oldSkill,newSkill) => dispatch(skillActions.putSkillRequest(oldSkill,newSkill)),
  deleteSkill: oldSkill => dispatch(skillActions.deleteSkillRequest(oldSkill))
});

export default connect(mapStateToProps,mapDispatchToProps)(SkillContainer);
