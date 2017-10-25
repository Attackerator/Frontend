import './_stat-container.scss';

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
        <h2>Stats</h2>
        <div>
          {
            this.props.character.stats.map(stat => {
              return(
                <StatItem key={stat._id} stat={stat} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  character: state.defaultStateReducer.currentCharacter
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps,mapDispatchToProps)(StatContainer);
