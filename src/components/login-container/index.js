import React from 'react';

import SignInForm from '../signin-form';
import SignUpForm from '../signup-form';

export default class LoginContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      signIn: true
    };

    this.toggleSignIn = this.toggleSignIn.bind(this);
  }

  toggleSignIn(e) {
    e.preventDefault();
    this.setState({
      signIn: !this.state.signIn
    });
  }

  render(){
    return(
      <div className="signup-signin">
        {
          this.state.signIn  ?
            (
              <div>
                <SignInForm/>
                <span className="signUp"><a href="#" onClick={this.toggleSignIn}>Create an Account</a></span>
              </div>
            ) :
            (
              <div>
                <SignUpForm/>
                <span className="signUp"><a href="#" onClick={this.toggleSignIn}>Use Existing Account</a></span>
              </div>
            )
        }
      </div>
    );
  }
}
