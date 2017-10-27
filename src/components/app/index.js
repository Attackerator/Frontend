import React from 'react';
import { BrowserRouter as Router,Route,Link,Redirect } from 'react-router-dom';

import ModalContainer from '../modal-container';
import LoginContainer from '../login-container';
import DashboardContainer from '../dashboard';
import { get_cookie } from '../../lib/helper';

function isloggedIn() {
  return get_cookie('token');
}

export default class App extends React.Component {

  render(){
    return(
      <div className="app">
        <ModalContainer />
        <Route exact path='/login' component={LoginContainer}/>
        <Route exact path='/' render={() => (isloggedIn() ?  (<DashboardContainer />) : (<Redirect to='/login'/>))}/>
      </div>
    );
  }
}
