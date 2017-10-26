import './_attack-item.scss';

import React from 'react';
import RollButton from '../roll-button';

export default class AttackItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: this.props.attack.name,
      stat: this.props.attack.bonus,
      damageType: this.props.attack.damageType,
      diceType: this.props.attack.diceType,
      diceCount: this.props.attack.diceCount,
      description: this.props.attack.diceCount,
      toHitBonus: this.props.attack.toHitBonus,
      damageBonus: this.props.attack.toHitBonus,
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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.editSkill(
      this.props.skill,
      {
        name: this.state.name,
        bonus: this.state.bonus,
        stat: this.state.stat,
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
      <div className="attackItem">
        <div className="main">
          <RollButton />
          <h3>{this.props.attack.name}</h3>
          <div onClick={this.handleExpand}>
          {this.state.expand
            ?
            <i className="fa fa-minus-square-o" aria-hidden="true"></i>
            :
            <i className="fa fa-plus-square-o" aria-hidden="true"></i>
          }
          </div>
        {
        this.state.expand ?
        <div className="content">
            <ul>
              <li>{this.props.attack.description}</li>
              <li>Damage: {this.props.attack.diceCount}d{this.props.attack.diceType} + {this.props.attack.damageBonus}</li>
              <li>Damage Type: {this.props.attack.damageType}</li>
              <li>Hit Bonus: {this.props.attack.toHitBonus}</li>
              <li>{this.props.attack.stat}</li>
            </ul>
          <button className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button className="delete"><i className="fa fa-trash" aria-hidden="true"></i></button>
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
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="diceCount"
                  value={this.state.diceCount}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="diceType"
                  value={this.state.diceType}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="damageBonus"
                  value={this.state.damageBonus}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="damageType"
                  value={this.state.damageType}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="toHitBonus"
                  value={this.state.toHitBonus}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="stat"
                  value={this.state.stat}
                  onChange={this.handleChange}
                />
                <button type="submit">Submit Change</button>
              </form> :
              <div>
            </div>
          }
        </div> :
      <div>
      </div>
    }
    </div>
    </div>
    );
  }
}
