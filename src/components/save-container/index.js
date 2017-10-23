import React from 'react';
import { connect } from 'react-redux';

class SaveContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="charcter">
        <h1>{this.props.character.name}</h1>
        {
          this.props.character.saves.map(save => {
            return(
              <SaveItem save={save} character={this.props.character}/>
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

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps,mapDispatchToProps)(SaveContainer);
