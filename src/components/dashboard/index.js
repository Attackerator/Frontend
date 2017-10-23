import './_dashboard.scss';
import React from 'react';
import {connect} from 'react-redux';

class DashboardContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='dashboard-container'>
        <h2>I am a Dashboard</h2>
      </div>
    );
  }
}
