import './_save-item.scss';

import React from 'react';
import RollButton from '../roll-button';

export default class SaveItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="saveItem">
        <div className="main">
          <RollButton />
          <h3>{this.props.save.type}</h3>
        </div>
        <div className="content">
          <ul>
            <li>Bonus: {this.props.save.bonus}</li>
            <li>{this.props.save.stat}</li>
          </ul>
          <button className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button className="delete"><i className="fa fa-trash" aria-hidden="true"></i></button>
        </div>
      </div>
    );
  }
}
