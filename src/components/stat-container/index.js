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

  handleToggleForm(){
    this.setState({ toggleForm: !this.state.toggleForm});
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addStat(
      this.props.character._id,
      {
        strength: this.state.strength,
        dexterity: this.state.dexterity,
        constitution: this.state.constitution,
        intelligence: this.state.intelligence,
        charisma: this.state.charisma,
        wisdom: this.state.wisdom,
      });
    this.setState({
      toggleForm: false,
      strength: '',
      dexterity: '',
      wisdom: '',
      intelligence: '',
      charisma: '',
      constitution: ''
    });
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
