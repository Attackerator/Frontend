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
      stat: ''
    };
    
  }

  render(){
    return(
      <div className="saves">
        <h2>Saves</h2>
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
