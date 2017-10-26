import './_dashboard.scss';
import img from '../../images/attackeratorLogo.png';
import React from 'react';
import {connect} from 'react-redux';
import CharacterItem from '../character-item';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import * as charActions from '../../actions/character';
import { get_cookie } from '../../lib/helper';

class DashboardContainer extends React.Component {
  constructor(props){
    super(props);

    this.setCharacter=this.setCharacter.bind(this);
    this.logOut=this.logOut.bind(this);
  }

  componentWillMount() {
    let lastChar = get_cookie('characterId');
    this.props.getCharacterList()
      .then({
        if(lastChar){
          this.props.getCharacter(lastChar);
        }
      });
  }

  logOut(){
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'characterId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  setCharacter(e){
    this.props.getCharacter(e.target.id)
      .then(this.props.getLastCharacter(e.target.id));
  }

  render(){
    return (
      <div className='dashboard-container'>
        <div className='dash-head'>
          <div className="logo"></div>
        </div>
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
        {
          this.props.lastChar ? <CharacterItem/> : <div className="hideMe"></div>
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
  getCharacterList: () => dispatch(charActions.getCharacterListRequest()),
  getCharacter: (id) => dispatch(charActions.getCharacterRequest(id)),
  getLastCharacter: (id) => dispatch(charActions.getLastCharacter(id)),
  postCharacter: (id,character) => dispatch(charActions.postCharacterRequest(character)),
});

export default connect(mapStateToProps,mapDispatchToProps)(DashboardContainer);
