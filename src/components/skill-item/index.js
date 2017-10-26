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
      expand: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
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

  handleExpand(){
    this.setState({
      expand: !this.state.expand
    });
  }

  render(){
    return(
      <div className="skillItem">
        <button className="roll">Roll</button>
        <span>{this.props.skill.name}</span>
        <button onClick={this.handleExpand}>{this.state.expand ? '-' : '+' }</button>
        {
          this.state.expand ?
            <div>
              <ul>
                <li>{this.props.skill.bonus}</li>
                <li>{this.props.skill.stat}</li>
              </ul>
              <button className="edit" onClick={this.toggleEdit}>edit</button>
              <button className="delete" onClick={this.handleClick}>delete</button>
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
            </div> :
            <div></div>
        }
      </div>
    );
  }
}
