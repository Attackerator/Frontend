import React from 'react';
import { connect } from 'react-redux';
import StatItem from '../stat-item';

class StatContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="stats">
        <h2>Spells</h2>
        <ul>
          {
            Object.keys(this.props.character.stats).map(stat => {
              if(stat != 'characterID' && stat != 'userId'){
                return(
                  <StatItem key={stat} statName={stat} value={this.props.character.stats[stat]}/>
                );
              }
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  character: state.currentCharacter
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps,mapDispatchToProps)(StatContainer);
