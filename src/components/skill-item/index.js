import './_skill-item.scss';

import React from 'react';
import RollButton from '../roll-button';

export default class SkillItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: this.props.skill.name,
      bonus: this.props.skill.bonus,
      stat: this.props.skill.stat,
      edit: false,
      expand: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  toggleEdit(){
    this.setState({
      edit: !this.state.edit
    });
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.actions.editSkill(
      this.props.skill,
      {
        name: this.state.name,
        bonus: this.state.bonus,
        stat: this.state.stat
      });
    this.setState({ edit: false });
  }

  handleDelete(){
    this.props.actions.deleteSkill(this.props.skill);
  }

  handleExpand(){
    this.setState({
      expand: !this.state.expand
    });
  }

  render(){
    return(
      <div className="skillItem">
        <div className="main">
          <RollButton modalType={'ROLL_ONE'} modalProps={{modifer: Math.floor((this.props.character.stats[0][this.props.skill.stat.toLowerCase()]-10)/2), bonus: this.props.skill.bonus}} />
          <h3>{this.props.skill.name}</h3>
          <button onClick={this.handleExpand}>{this.state.expand ? '-' : '+' }</button>
        </div>
        {
          this.state.expand ?
            <div className="content">
              <ul>
                <li>{this.props.skill.bonus}</li>
                <li>{this.props.skill.stat}</li>
              </ul>
              <button className="edit" onClick={this.toggleEdit}><i className="fa fa-pencil" aria-hidden="true"></i></button>
              <button className="delete" onClick={this.handleDelete}><i className="fa fa-trash" aria-hidden="true"></i></button>
              {
                this.state.edit ?
                  <form onSubmit={this.handleSubmit}>
                    <label>Skill Name:
                      <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label>Bonus:
                      <input
                        type="number"
                        name="bonus"
                        value={this.state.bonus}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label>Stat:
                      <select
                        name="stat"
                        value={this.state.stat}
                        onChange={this.handleChange}
                        placeholder="stat"
                      >
                        <option name="strength" value="strength">Strength</option>
                        <option name="dexterity" value="dexterity">Dexterity</option>
                        <option name="constitution" value="constitution">Constitution</option>
                        <option name="intelligence" value="intelligence">Intelligence</option>
                        <option name="charisma" value="charisma">Charisma</option>
                        <option name="wisdom" value="wisdom">Wisdom</option>
                      </select>
                    </label>
                    <button type="submit">Submit Change</button>
                  </form> : null
              }
            </div> : null
        }
      </div>
    );
  }
}
