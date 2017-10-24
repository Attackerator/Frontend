import React from 'react';
import { connect } from 'react-redux';
import AttackContainer from '../attack-container';
import SaveContainer from '../save-container';
import SpellContainer from '../spell-container';
import SkillContainer from '../skill-container';

class CharacterItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      tab: 'stats'
    };
  }

  render(){
    return(
      <div className="charcter">
        <header>
          <div className="logo">
          </div>
          <h1>{this.props.character.name}</h1>
          <div className="profile">
          </div>
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
                  <SpellContainter/> :
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
  //character: state.currentCharacter
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps,mapDispatchToProps)(CharacterItem);
