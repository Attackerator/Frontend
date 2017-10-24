import './_stat-item.scss';

import React from 'react';

export default class StatItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div>
        {
          Object.keys(this.props.stat).map(key => {
            if(['strength','dexterity','constitution','intelligence','wisdom','charisma'].indexOf(key) > -1){
              return(
                <div key={key} className="statItem">
                  <button className='roll'>Roll</button>
                  <h3>{key}</h3>
                  <span className="value">{this.props.stat[key]}</span>
                  <span className="modifier">{Math.floor((this.props.stat[key]-10)/2)}</span>
                  <button className='edit'>Edit</button>
                </div>
              );
            }
          })
        }

      </div>
    );
  }
}
