import './_skill-container.scss';

import React from 'react';
import { connect } from 'react-redux';
import SkillItem from '../skill-item';

import * as skillActions from '../../actions/skill';

class SkillContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="skills">
        <h2>Skills</h2>
        <button className="new">New</button>
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
