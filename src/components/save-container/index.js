import './_save-container.scss';

import React from 'react';
import { connect } from 'react-redux';
import SaveItem from '../save-item';

import * as saveActions from '../../actions/save';

class SaveContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      toggleForm: false,
      type: '',
      bonus: '',
      stat: 'strength'
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
    this.props.addSave(
      this.props.character._id,
      {
        type: this.state.type,
        bonus: this.state.bonus,
        stat: this.state.stat
      });
    this.setState({
      toggleForm: false,
      type: '',
      bonus: '',
      stat: ''
    });
  }

  render(){
    return(
      <div className="saves">
        <h2>Saves</h2>
        <button className="new" onClick={this.handleToggleForm}>New</button>
        {
          this.state.toggleForm ?
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="type"
                value={this.state.type}
                onChange={this.handleChange}
                placeholder="Type"
              />
              <input
                type="text"
                name="bonus"
                value={this.state.bonus}
                onChange={this.handleChange}
                placeholder="Bonus"
              />
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
              <button type="submit">Submit Change</button>
            </form> :
            <div></div>
        }
        <div className="wrapper">
          {
            this.props.character.saves.map(save => {
              return(
                <SaveItem
                  key={save._id}
                  save={save}
                  character={this.props.character}
                  actions={
                    {
                      addSave: this.props.addSave,
                      editSave: this.props.putSave,
                      deleteSave: this.props.deleteSave
                    }
                  }
                />
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
  addSave: (charId, save) => dispatch(saveActions.postSaveRequest(charId, save)),
  putSave: (oldSave, newSave) => dispatch(saveActions.putSaveRequest(oldSave,newSave)),
  deleteSave: save => dispatch(saveActions.deleteSaveRequest(save))
});

export default connect(mapStateToProps,mapDispatchToProps)(SaveContainer);
