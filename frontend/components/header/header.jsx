import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegBell, FaBell, FaPlusCircle, FaUser } from 'react-icons/fa';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { notifications: "off" }
    this.logoutFn = this.logoutFn.bind(this);
    this.returnBell = this.returnBell.bind(this);
    this.handleBell = this.handleBell.bind(this);
  }

  logoutFn() {
    this.props.logout()
      .then(() => this.props.history.push("/"));
  }

  returnBell() {
    if (this.state.notifications === "off") {
      return <button onClick={this.handleBell} className="header-personal-bell-off"><FaRegBell /></button>
    } else {
      return <button onClick={this.handleBell} className="header-personal-bell-on"><FaBell /></button>
    }
  }

  handleBell() {
    if (this.state.notifications === "off") {
      this.setState({ notifications: "on" })
    } else {
      this.setState({ notifications: "off" })
    }
  }

  loginHeader() {
    return (
      <nav className="header-login">
        <Link to="/"><img src={window.logoURL} className="header-logo" alt="Logo" /></Link>
        <Link to="/signup" className="header-signup-link">Sign Up</Link>
      </nav>
    )
  };

  signupHeader() {
    return (
      <nav className="header-signup">
        <Link to="/"><img src={window.logoURL} className="header-logo" alt="Logo" /></Link>
        <Link to="/login" className="header-login-link">Log In</Link>
      </nav>
    )
  };

  personalHeader() {
    return (
    <nav className="header-personal">
      <div className="header-personal-left">
        <Link to="/feed"><img src={window.logoURL} className="header-logo" alt="Logo" /></Link>
        <div className="header-personal-trigger-dashboard">
            <div className="header-title-left">Dashboard &#9662;</div>
            <ul>
              <li><Link to="/feed">Activity Feed</Link></li>
              <li><Link to={`/${this.props.currentUser.id}/routes`}>My Routes</Link></li>
            </ul>
        </div>
        <Link to="/feed">Challenges</Link> 
      </div>
      <div className="header-personal-right">
        {this.returnBell()}
        <div className="header-personal-trigger-image">
          <div className="header-title-right">
            <div className="header-image"><FaUser className="header-user-icon"/></div>
            &#9662;
          </div>
          <ul>
            <li><a href="#">My Profile</a></li>
            <li><Link to="#" className="header-logout-button" onClick={this.logoutFn}>Log Out</Link></li>
          </ul>
        </div>
        <div className="header-personal-trigger-image">
          <div className="header-title-right">
            <div className="header-plus"><FaPlusCircle /></div>
          </div>
          <ul>
            <li><Link to="/activities/new">Add Activity</Link></li>
            <li><Link to="/routes/new">Create a Route</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    )
  };

  render() {
    if (this.props.currentUser) {
      return this.personalHeader();
    } else if (this.props.location.pathname === "/login") {
      return this.loginHeader();
    } else {
      return this.signupHeader();
    }
  };
};

export default Header;