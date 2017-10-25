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

    this.changeTab = this.changeTab.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      tab: '',
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

  changeTab(e) {
    e.preventDefault();
    this.setState({
      tab: e.target.id
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
            <li><a id="Attacks" href="#" onClick={this.changeTab}>Attacks</a></li>
            <li><a id="Saves" href="#" onClick={this.changeTab}>Saves</a></li>
            <li><a id="Skills" href="#" onClick={this.changeTab}>Skills</a></li>
            <li><a id="Spells" href="#" onClick={this.changeTab}>Spells</a></li>
            <li><a id="Stats" href="#" onClick={this.changeTab}>Stats</a></li>
          </ul>
        </nav>
        <div className="resources">
          {
            this.state.tab === 'Attacks' ?
              <AttackContainer/> :
              this.state.tab === 'Saves' ?
                <SaveContainer/> :
                this.state.tab === 'Spells' ?
                  <SpellContainer/> :
                  this.state.tab === 'Skills' ?
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
