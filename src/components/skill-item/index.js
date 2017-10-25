import './_skill-item.scss';

import React from 'react';

export default class SkillItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: this.props.skill.name,
      bonus: this.props.skill.bonus,
      stat: this.props.skill.stat,
      edit: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  }

  render(){
    return(
      <div className="skillItem">
        <button className="roll">Roll</button>
        <h3>{this.props.skill.name}</h3>
        <div className="hideMe">
          <ul>
            <li>{this.props.skill.bonus}</li>
            <li>{this.props.skill.stat}</li>
          </ul>
          <button className="edit" onClick={this.toggleEdit}>edit</button>
          {
            this.state.edit ?
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="bonus"
                  value={this.state.bonus}
                  onChange={this.handleChange}
                /><input
                  type="text"
                  name="stat"
                  value={this.state.stat}
                  onChange={this.handleChange}
                />
                <button type="submit">Submit Change</button>
              </form> :
              <div></div>
          }
          <button className="delete" onClick={this.handleClick}>delete</button>
        </div>
      </div>
    );
  }
}
