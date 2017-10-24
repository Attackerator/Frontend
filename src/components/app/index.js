import React from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';

import SignInForm from '../signin-form';
import DashboardContainer from '../dashboard';

export default class App extends React.Component {
  render(){
    return(
      <div className="app">
        <div>
          <Route exact path='/dashboard' component={DashboardContainer} />
          <Route exact path='/home/signin' component={SignInForm}/>
        </div>
        <nav>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/home/signin'}>Sign Up</Link></li>
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}
