import './_save-item.scss';

import React from 'react';
import RollButton from '../roll-button';

export default class SaveItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      type: this.props.save.type,
      bonus: this.props.save.bonus,
      stat: this.props.save.stat,
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
    this.props.actions.editSave(
      this.props.save,
      {
        type: this.state.name,
        bonus: this.state.bonus,
        stat: this.state.stat
      });
    this.setState({ edit: false});
  }

  handleDelete(){
    this.props.actions.deleteSave(this.props.save);
  }

  handleExpand(){
    this.setState({
      expand: !this.state.expand
    });
  }

  render(){
    return(
      <div className="saveItem">
        <div className="main">
          <RollButton modalType={'ROLL_ONE'} modalProps={{modifer: Math.floor((this.props.character.stats[0][this.props.save.stat.toLowerCase()]-10)/2), bonus: this.props.save.bonus}} />
          <h3>{this.props.save.type}</h3>
          <button onClick={this.handleExpand}>{this.state.expand ? '-' : '+' }</button>
        </div>
        {
          this.state.expand ?
            <div className="content">
              <ul>
                <li>Bonus: {this.props.save.bonus}</li>
                <li>{this.props.save.stat}</li>
              </ul>
              <button className="edit" onClick={this.toggleEdit}><i className="fa fa-pencil" aria-hidden="true"></i></button>
              <button className="delete" onClick={this.handleDelete}><i className="fa fa-trash" aria-hidden="true"></i></button>
              {
                this.state.edit ?
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      name="type"
                      value={this.state.type}
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      name="bonus"
                      value={this.state.bonus}
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
            </div> : null
        }
      </div>
    );
  }
}
