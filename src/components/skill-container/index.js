import React from 'react';
import { connect } from 'react-redux';

class SkillContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="skills">
        <h2>Skills</h2>
        {
          this.props.character.skills.map(skill => {
            return(
              <SKillItem skill={skill} character={this.props.character}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(SkillContainer);
