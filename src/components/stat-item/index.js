import './_stat-item.scss';

import React from 'react';

export default class StatItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li className="statItem">
        <button className='roll'>Roll</button>
        <h3>{this.props.statName}</h3>
        <span>{this.props.value}</span>
        <button className='edit'>Edit</button>
      </li>
    );
  }
}
