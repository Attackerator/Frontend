import './_skill-item.scss';

import React from 'react';

export default class SkillItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="skillItem">
        <button className="roll">Roll</button>
        <h3>{this.props.skill.name}</h3>
        <div className="hideMe">
          <ul>
            <li>{this.props.skill.bonus}</li>
            <li>{this.props.skill.stat}</li>
          </ul>
          <button className="edit">edit</button>
          <button className="delete">delete</button>
        </div>
      </div>
    );
  }
}
