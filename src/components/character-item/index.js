import React from 'react';
import { connect } from 'react-redux';
import AttackContainer from '../attack-container';
import SaveContainer from '../save-container';
import SpellContainer from '../spell-container';
import SkillContainer from '../skill-container';
import StatsContainer from '../stat-container';

class CharacterItem extends React.Component {
  constructor(props){
    super(props);

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      tab: 'attacks',
      editForm: false,
      characterName: ''
    };
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
  }

  toggleEdit() {
    this.setState({
      editForm: !this.state.editForm
    });
  }


  render(){
    return(
      <div className="character">
        <header>
          <h1>{this.props.character.name}</h1>
          <button className="edit" onClick={this.toggleEdit}>Edit</button>
          {
            this.state.editForm ?
            <form className="characterForm">
              <input
                type="text"
                name="characterName"
                value={this.state.characterName}
                placeholder={this.props.character.name}
                onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
            </form>
            : <div></div>
          }
          <button className="delete">Delete</button>
        </header>
        <nav className="resourceNav">
          <ul>
            <li>Attacks</li>
            <li>Saves</li>
            <li>Skills</li>
            <li>Spells</li>
          </ul>
        </nav>
        <div className="resources">
          {
            this.state.tab === 'attacks' ?
              <AttackContainer/> :
              this.state.tab === 'saves' ?
                <SaveContainer/> :
                this.state.tab === 'spells' ?
                  <SpellContainer/> :
                  this.state.tab === 'skills' ?
                    <SkillContainer/> :
                      <StatsContainer />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  character: state.defaultStateReducer.currentCharacter
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps,mapDispatchToProps)(CharacterItem);
