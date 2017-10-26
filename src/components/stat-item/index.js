import './_stat-item.scss';

import React from 'react';
import RollButton from '../roll-button';

export default class StatItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div className = "statItem-wrapper">
        {
          Object.keys(this.props.stat).map(key => {
            if(['strength','dexterity','constitution','intelligence','wisdom','charisma'].indexOf(key) > -1){
              return(
                <div key={key} className="statItem">
                  <RollButton modalType={'ROLL_ONE'} modalProps={{modifer: Math.floor((this.props.stat[key]-10)/2), bonus: 0}} />
                  <h3>{key}</h3>
                  <span className="value">{this.props.stat[key]}</span>
                  <span className="modifier">{Math.floor((this.props.stat[key]-10)/2)}</span>
                  <button className='edit'><i className="fa fa-pencil" aria-hidden="true"></i></button>
                </div>
              );
            }
          })
        }

      </div>
    );
  }
}
