import React from 'react';
import { connect } from 'react-redux';

class AttackContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="charcter">
        <h1>{this.props.character.name}</h1>
        {
          this.props.character.attacks.map(attack => {
            return(
              <AttackItem attack={attack} character={this.props.character}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(AttackContainer);
