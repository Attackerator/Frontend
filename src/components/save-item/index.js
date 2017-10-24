import './_save-item.scss';

import React from 'react';

export default class SaveItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="saveItem">
        <button className="roll">Roll</button>
        <h3>{this.props.save.type}</h3>
        <div className="hideMe">
          <ul>
            <li>Bonus: {this.props.save.bonus}</li>
            <li>{this.props.save.stat}</li>
          </ul>
          <button className="edit">edit</button>
          <button className="delete">delete</button>
        </div>
      </div>
    );
  }
}
