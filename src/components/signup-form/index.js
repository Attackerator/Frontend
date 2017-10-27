import './_signup-form.scss';

import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';



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
    this.setState({
      username: '',
      password: '',
      email: ''
    });
  }

  render(){
    return(
      <form className ="signUp-form" onSubmit={this.handleSubmit}>
        <div className = "signUpHead" ><h1>Sign Up Here</h1></div>
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
          placeholder="john.doe@example.com"
          onChange={this.handleChange}
        />
        <button className="submitSignUp" type="submit">Sign Up!</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(authActions.signUpRequest(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm);
