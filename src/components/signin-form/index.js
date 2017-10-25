import './_signin-form.scss';

import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';

class SignInForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
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
    this.props.signIn(this.state);
  }

  render(){
    return(
      <form className="signin-form" onSubmit={this.handleSubmit}>
        <div className = "signIn" ><h1>Sign In Here</h1> </div>
        <input
          type="text"
          name="username"
          value={this.state.username}
          placeholder="username"
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="password"
          onChange={this.handleChange}
        />
        <button type="submit">Sign In</button>
      </form>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  signIn: user => dispatch(authActions.signInRequest(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(SignInForm);
