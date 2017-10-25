import React from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';

import SignInForm from '../signin-form';
import SignUpForm from '../signup-form';
import DashboardContainer from '../dashboard';
import { get_cookie } from '../../lib/helper';

function loggedIn() {
  let token = get_cookie('toekn');
  if(token){
    return true;
  }
  return false;
}

function requireAuth(nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: '/login'
    });
  }
}


export default class App extends React.Component {

  render(){
    return(
      <div className="app">
        <div>
          <Route exact path='/' component={DashboardContainer} onEnter={requireAuth}/>
          <Route exact path='/login' component={SignInForm}/>
          <Route exact path='/home/signup' component={SignUpForm}/>
        </div>
        <nav>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/home/signup'}>Sign Up</Link></li>
            <li><Link to={'/login'}>Sign In</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}
