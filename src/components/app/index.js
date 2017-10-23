import React from 'react';
import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';
import createAppStore from '../../lib/store';
import { Provider } from 'react-redux';

import SignInForm from '../signin-form';

const store = createAppStore();

import DashboardContainer from '../dashboard';

export default class App extends React.Component {
  render(){
    return(
      <div>
        <Provider store={store}>
          <Router>
            <section>
            <div>
              <Route exact path='/dashboard' component={DashboardContainer} />
            </div>
              <nav>
                <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/home/signin'}>Sign Up</Link></li>
                </ul>
              </nav>
              <Route exact path='/home/signin' component={SignInForm}>
              <div>
                <button>Random Button</button>
                <button>Random Button</button>
                <button>Random Button</button>
                <input placeholder="InputField"/>
                <input placeholder="InputField"/>
                <input placeholder="InputField"/>
              </div>
            </section>
          </Router>
        </Provider>
      </div>
    );
  }
}
