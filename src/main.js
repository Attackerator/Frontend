import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';
import createAppStore from './lib/store';
import { Provider } from 'react-redux';

const store = createAppStore();

class AppContainer extends React.Component {
  render(){
    return(
      <div>
        <Provider store={store}>
          <Router>
            <section>
              <App/>
            </section>
          </Router>
        </Provider>
      </div>
    );
  }
}
ReactDOM.render(<AppContainer />,document.getElementById('root'));
