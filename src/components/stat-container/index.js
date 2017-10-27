import './_stat-container.scss';

import React from 'react';
import { connect } from 'react-redux';
import StatItem from '../stat-item';

import * as statActions from '../../actions/stat';

class StatContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      toggleForm: false,
      strength: '',
      dexterity: '',
      wisdom: '',
      intelligence: '',
      charisma: '',
      constitution: ''
    };

    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return(
      <div className="stats">
        <h2>Stats</h2>
        <div className = "statContainer-wrapper">
          {
            this.props.character.stats.map(stat => {
              return(
                <StatItem key={stat._id} stat={stat} editStats={this.props.editStats}/>
              );
            })
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
  editStats: (id,stats) => dispatch(statActions.putStatsRequest(id,stats))
});

export default connect(mapStateToProps,mapDispatchToProps)(StatContainer);
