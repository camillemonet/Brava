import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  loginHeader() {
    return (<nav className="login-signup">
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up!</Link>
    </nav>)
  };

  signupHeader() {
    return (
      <nav className="header-nav">
        <img src={window.logoURL}  className="header-logo" alt="Logo"/>
        <Link to="/login" className="signup-header-login-link">Log In</Link>
      </nav>
    )
  };

  personalHeader() {
    return (<hgroup className="header-group">
      <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
      <button className="header-button" onClick={this.props.logout}>Log Out</button>
    </hgroup>)
  };

  render() {
    if (this.props.currentUser) {
      return this.personalHeader();
    } else {
      return this.signupHeader();
    }
  };
};

export default Header;