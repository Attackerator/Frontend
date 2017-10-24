import './_signup-form.scss';

import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../..actions/auth';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render(){
    return(
      <form className="signup" onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <input
          type="text"
          name="username"
          value={this.state.username}
          placeholder="Username"
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.handleChange}
        />
        <button type="submit">Sign Up!</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(authActions.signUpRequest(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm);
