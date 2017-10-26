import React from 'react';
import { connect } from 'react-redux';
import AttackContainer from '../attack-container';
import SaveContainer from '../save-container';
import SpellContainer from '../spell-container';
import SkillContainer from '../skill-container';
import StatsContainer from '../stat-container';
import * as charActions from '../../actions/character';

import './_character-item.scss';


class CharacterItem extends React.Component {
  constructor(props){
    super(props);

    this.changeTab = this.changeTab.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

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
    this.setState({editForm: false});
    return this.props.putCharacterRequest(this.props.character._id, {name: this.state.characterName})
      .then(() => this.props.getCharacterList());
  }

  toggleEdit() {
    this.setState(function(state) {
      return {
        editForm: !this.state.editForm
      };
    });
  }

  changeTab(e) {
    e.preventDefault();
    this.setState({
      tab: e.target.id
    });
  }

  handleDelete(){
    return this.props.deleteCharacterRequest(this.props.character._id)
    .then(() => this.props.getCharacterList());
  }

  render(){
    if(!this.props.character){
      return(
        <Redirect to='/'/>
      );
    }
    return(
      <div className="character">
        <header>
          <h1>{this.props.character.name}</h1>
          <button className="edit" onClick={this.toggleEdit}><i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button className="delete" onClick={this.handleDelete}><i className="fa fa-trash" aria-hidden="true"></i></button>
          {
            this.state.editForm ?
            <form className="characterForm" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="characterName"
                value={this.state.characterName}
                placeholder={this.props.character.name}
                onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
            </form>
            : <div className="hideMe"></div>
          }
        </header>
        <nav className="resourceNav">
          <ul>
            <li><i className="fa fa-bars" aria-hidden="true"></i></li>
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
  character: state.currentCharacter
});
const mapDispatchToProps = dispatch => ({
  getCharacterList: () => dispatch(charActions.getCharacterListRequest()),
  putCharacterRequest: (id,character) => dispatch(charActions.putCharacterRequest(id,character)),
  deleteCharacterRequest: (id) => dispatch(charActions.deleteCharacterRequest(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(CharacterItem);
