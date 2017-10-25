import React from 'react';
import { BrowserRouter as Router,Route,Link,Redirect } from 'react-router-dom';

import SignInForm from '../signin-form';
import SignUpForm from '../signup-form';
import DashboardContainer from '../dashboard';
import { get_cookie } from '../../lib/helper';

function isloggedIn() {
  console.log(get_cookie('token'));
  return get_cookie('token');
}

export default class App extends React.Component {

  render(){
    return(
      <div className="app">
          <Route exact path='/login' component={SignInForm}/>
          <Route exact path='/dashboard' render={() => (isloggedIn() ?  (<DashboardContainer />) : (<Redirect to='/login'/>))}/>
          <Route exact path='/home/signup' component={SignUpForm}/>
        <nav>
          <ul>
            <li><Link to={'/dashboard'}>Home</Link></li>
            <li><Link to={'/home/signup'}>Sign Up</Link></li>
            <li><Link to={'/login'}>Sign In</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}
