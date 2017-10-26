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
      characterName: ''
    };

    this.toggleNew=this.toggleNew.bind(this);
    this.setCharacter=this.setCharacter.bind(this);
    this.logOut=this.logOut.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  componentWillMount() {
    let lastChar = get_cookie('characterId');
    this.props.getCharacterList();
    if(lastChar){
      this.props.getCharacter(lastChar);
    }
    this.props.setUser();
  }

  logOut(){
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'characterId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    this.props.logOutCleanup();
  }

  setCharacter(e){
    this.props.getCharacter(e.target.id)
      .then(this.props.getLastCharacter(e.target.id));
  }


  toggleNew(e) {
    e.preventDefault();
    this.setState(function(state) {
      return {
        showNew: !this.state.showNew
      };
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

  render(){
    return (
      <div className='dashboard-container'>
        {
          this.props.list ?
            (<div className="dash-wrapper">
              <div className='dash-head'>
                <div className="logo"></div>
                <h2>Attackerator</h2>
                <nav className="profile">
                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                  <ul className="showMe">
                    <li>Profile</li>
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
                </nav>
              </div>
              {
                this.state.showNew ?
                <form className="newCharacterForm" onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="characterName"
                    value={this.state.characterName}
                    placeholder="Character Name"
                    onChange={this.handleChange}
                  />
                  <button type="submit">Submit</button>
                </form>
                : <div className="hideMe"></div>
              }
              {
                this.props.lastChar ? <CharacterItem/> : <div className="hideMe"></div>
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
  lastChar: state.lastChar
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
