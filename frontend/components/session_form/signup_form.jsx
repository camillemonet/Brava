import React from 'react';
import { Link } from 'react-router-dom';
import { FaAddressCard } from 'react-icons/fa';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  componentDidMount() {
    this.props.resetErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.props.history.push("/feed"));
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    this.props.login({ email: 'demo@gmail.com', password: '123456' })
      .then(() => this.props.history.push("/feed"));
  }

  handleErrors() {
    if (this.props.errors.length !== 0) {
      return (
        <div className="login-session-error">{this.props.errors.join()}</div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

  render() {
    return (
      <div className="signup-main-content">
        <div className="signup-middle-menu">

          <h1 className="signup-title">Join Brava today, it's Free.</h1>

          {this.handleErrors()}

          <div className="signup-entry">

            <form to="/signup" onSubmit={this.handleDemoSubmit}>
              <button type="submit" className="signup-link-demo">
                <FaAddressCard className="signup-react-icon" />
                <div>Sign up using Demo</div>
              </button>
            </form>

            <div className="signup-or">Or sign up with your email address</div>

            <form onSubmit={this.handleSubmit} className="signup-form">
              <input className="signup-input-email" type="text" value={this.state.email} placeholder="Your Email" onChange={this.update('email')} />
              <input className="signup-input-password" type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />
              <br />
              <button className="signup-button" type="submit">Sign Up</button>
            </form>

            <div className="signup-terms">
              By signing up for Brava, you agree to the 
              <a href=""> Terms of Service</a>.
              View our 
              <a href=""> Privacy Policy</a>.
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default SignupForm;