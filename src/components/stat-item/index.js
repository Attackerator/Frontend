import './_stat-item.scss';

import React from 'react';
import RollButton from '../roll-button';

export default class StatItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      strength: {
        edit: false,
        strength: this.props.stat.strength,
        new: this.props.stat.strength
      },
      dexterity: {
        edit: false,
        dexterity: this.props.stat.dexterity,
        new: this.props.stat.dexterity
      },
      constitution: {
        edit: false,
        constitution: this.props.stat.constitution,
        new: this.props.stat.constitution
      },
      intelligence: {
        edit: false,
        intelligence: this.props.stat.intelligence,
        newI: this.props.stat.intelligence
      },
      wisdom: {
        edit: false,
        wisdom: this.props.stat.wisdom,
        new: this.props.stat.wisdom
      },
      charisma: {
        edit: false,
        charisma: this.props.stat.charisma,
        new: this.props.stat.charisma
      }
    };

    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggleEdit(key){
    this.setState({
      ...this.state,
      [key]: {
        ...this.state[key],
        edit: !this.state[key].edit
      }
    });
  }

  handleChange(e){
    this.setState({
      ...this.state,
      [e.target.name]: {
        ...this.state[e.target.name],
        new: e.target.value
      }
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.editStats(
      this.props.stat._id,
      {
        strength: this.state.strength.new,
        dexterity: this.state.dexterity.new,
        constitution: this.state.constitution.new,
        intelligence: this.state.intelligence.new,
        wisdom: this.state.wisdom.new,
        charisma: this.state.charisma.new
      });
    this.setState({
      strength: {
        edit: false,
        strength: this.props.stat.strength,
        new: this.props.stat.strength
      },
      dexterity: {
        edit: false,
        dexterity: this.props.stat.dexterity,
        new: this.props.stat.dexterity
      },
      constitution: {
        edit: false,
        constitution: this.props.stat.constitution,
        new: this.props.stat.constitution
      },
      intelligence: {
        edit: false,
        intelligence: this.props.stat.intelligence,
        newI: this.props.stat.intelligence
      },
      wisdom: {
        edit: false,
        wisdom: this.props.stat.wisdom,
        new: this.props.stat.wisdom
      },
      charisma: {
        edit: false,
        charisma: this.props.stat.charisma,
        new: this.props.stat.charisma
      }
    });
  }

  render(){
    return(
      <div className = "statItem-wrapper">
        {
          Object.keys(this.props.stat).map(key => {
            if(['strength','dexterity','constitution','intelligence','wisdom','charisma'].indexOf(key) > -1){
              return(
                <div key={key} className="statItem">
                  <RollButton modalType={'ROLL_ONE'} modalProps={{modifer: Math.floor((this.props.stat[key]-10)/2), bonus: 0}} />
                  <h3>{key}</h3>
                  <span className="value">{this.props.stat[key]}</span>
                  <span className="modifier">{Math.floor((this.props.stat[key]-10)/2)}</span>
                  <button className='edit' onClick={() => this.handleToggleEdit(key)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                  {
                    this.state[key].edit ?
                      <form onSubmit={this.handleSubmit}>
                        <input
                          type="number"
                          name={key}
                          value={this.state[key].new}
                          onChange={this.handleChange}
                          placeholder="Stat Value"
                        />
                        <button type="submit">Submit</button>
                      </form> :
                      null
                  }
                </div>
              );
            }
          })
        }
      </div>
    );
  }
}
