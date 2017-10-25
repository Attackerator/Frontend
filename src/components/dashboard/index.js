import './_dashboard.scss';
import React from 'react';
import {connect} from 'react-redux';
import CharacterItem from '../character-item';

class DashboardContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='dashboard-container'>
        <div>
          <span>Icon?</span>
        </div>
        <h2>I am a Dashboard</h2>
        <nav>
          <ul>
            <li>Profile</li>
            <li>Log Out</li>
            <li>New Character</li>
            {
              this.props.list.map(character => {
                return(
                  <li key={character.characterId}>{character.name}</li>
                );
              })
            }
          </ul>
          </nav>
        <CharacterItem/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.defaultStateReducer.characters
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps,mapDispatchToProps)(DashboardContainer);
