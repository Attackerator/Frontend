import './_dashboard.scss';
import img from '../../images/attackeratorLogo.png';
import React from 'react';
import {connect} from 'react-redux';
import CharacterItem from '../character-item';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import * as charActions from '../../actions/character';
import * as userActions from '../../actions/user';
import { get_cookie } from '../../lib/helper';
import { logOutCleanup } from '../../actions/auth';

class DashboardContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showNew: false,
      characterName: '',
      profileToggle: false
    };

    this.toggleNew=this.toggleNew.bind(this);
    this.setCharacter=this.setCharacter.bind(this);
    this.logOut=this.logOut.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleProfileToggle = this.handleProfileToggle.bind(this);
  }

  componentWillMount() {
    let lastChar = get_cookie('characterId');
    return this.props.getCharacterList()
      .then(()=> this.props.setUser())
      .then(() => {
        if(lastChar){
          return this.props.getCharacter(lastChar)
            .then(this.props.getLastCharacter(lastChar));
        }
      });
  }

  logOut(){
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'characterId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    this.props.logOutCleanup();
  }

  setCharacter(e){
    this.props.getCharacter(e.target.id)
      .then(this.props.getLastCharacter(e.target.id));
    this.setState({
      profileToggle: false,
      showNew: false
    });
  }


  toggleNew(e) {
    e.preventDefault();
    this.setState(function(state) {
      return {
        showNew: !this.state.showNew
      };
    });
    this.setState({
      profileToggle: false,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({showNew: false});
    return this.props.postCharacter({name: this.state.characterName})
      .then(() => this.props.getCharacterList());
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleProfileToggle(){
    this.setState(function (state){
      return {
        profileToggle: !state.profileToggle
      };
    });
  }

  render(){
    return (
      <div className='dashboard-container'>
        {
          this.props.list ?
            (<div className="dash-wrapper">
              <div className='dash-head'>
                <div className="logo"></div>
                <h2>Attackerator</h2>
                <i className="fa fa-user-circle-o" aria-hidden="true" onClick={this.handleProfileToggle}></i>
                {
                  this.state.profileToggle ?
                    <nav className="profile">
                      <ul className="showMe">
                        <li className="yourName">{this.props.user.username}</li>
                        <li><Link to={'/login'} onClick={this.logOut}>Log Out</Link></li>
                        <li><a id="newCharacter" href="#" onClick={this.toggleNew}>New Character</a></li>
                        {
                          this.props.list.map(character => {
                            return(
                              <li key={character.characterId}><a id={character.characterId} href="#" onClick={this.setCharacter}>{character.name}</a></li>
                            );
                          })
                        }
                      </ul>
                    </nav> :
                    <div></div>
                }
              </div>
              {
                this.state.showNew && !this.state.profileToggle ?
                  <form className="newCharacterForm" onSubmit={this.handleSubmit}>
                    <label>Character Name:
                      <input
                        type="text"
                        name="characterName"
                        value={this.state.characterName}
                        placeholder="Character Name"
                        onChange={this.handleChange}
                      />
                    </label>
                    <button type="submit">Submit</button>
                  </form>
                  : <div className="hideMe"></div>
              }
              {
                this.props.lastChar && !this.state.profileToggle &&!this.state.showNew ? <CharacterItem/> : null
              }
            </div>)
            :
            <h1>Loading</h1>
        }

      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.characters,
  lastChar: state.lastChar,
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({
  logOutCleanup: () => dispatch(logOutCleanup()),
  getCharacterList: () => dispatch(charActions.getCharacterListRequest()),
  getCharacter: (id) => dispatch(charActions.getCharacterRequest(id)),
  getLastCharacter: (id) => dispatch(charActions.getLastCharacter(id)),
  postCharacter: (character) => dispatch(charActions.postCharacterRequest(character)),
  setUser: () => dispatch(userActions.setUserState(JSON.parse(localStorage.getItem('user'))))
});

export default connect(mapStateToProps,mapDispatchToProps)(DashboardContainer);
