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
        <button className="new" onClick={this.handleToggleForm}>New</button>
        <div className = "statContainer-wrapper">
          {
            this.state.toggleForm ?
              <form onSubmit={this.handleSubmit}>
                <input
                  type="number"
                  name="strength"
                  value={this.state.strength}
                  onChange={this.handleChange}
                  placeholder="Strength"
                />
                <input
                  type="number"
                  name="dexterity"
                  value={this.state.dexterity}
                  onChange={this.handleChange}
                  placeholder="Dexterity"
                />
                <input
                  type="number"
                  name="constitution"
                  value={this.state.constitution}
                  onChange={this.handleChange}
                  placeholder="Constitution"
                />
                <input
                  type="number"
                  name="intelligence"
                  value={this.state.intelligence}
                  onChange={this.handleChange}
                  placeholder="Intelligence"
                />
                <input
                  type="number"
                  name="charisma"
                  value={this.state.charisma}
                  onChange={this.handleChange}
                  placeholder="Charisma"
                />
                <input
                  type="text"
                  name="wisdom"
                  value={this.state.wisdom}
                  onChange={this.handleChange}
                  placeholder="Wisdom"
                />
                <button type="submit">Submit Stats</button>
              </form> :
              <div></div>
          }
          {
            this.props.character.stats.map(stat => {
              return(
                <StatItem
                  key={stat._id}
                  stat={stat}
                  character={this.props.character}
                  actions={
                    {
                      addStat: this.props.addStat,
                      editStat: this.props.putStat,
                      deleteStat: this.props.deleteStat
                    }
                  }/>
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
  editStats: (id,stats) => dispatch(statActions.putStatsRequest(id,stats)),
  addStat: (charId, stat) => dispatch(statActions.postStatRequest(charId, stat))
});

export default connect(mapStateToProps,mapDispatchToProps)(StatContainer);
