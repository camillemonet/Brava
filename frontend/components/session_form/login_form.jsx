import React from 'react';
import { Link } from 'react-router-dom';
import { FaAddressCard } from 'react-icons/fa';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
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
    this.props.action({email: 'demo@gmail.com', password: '123456'})
      .then(() => this.props.history.push("/feed"));
  }

  handleErrors() {
    if (this.props.errors.length !== 0) {
      return (
        <div className="login-session-error">{this.props.errors.join( )}</div>
      ) 
    } else {
      return (
        <div></div>
      )
    }
  }
  
  render() {
    return(
      <div className="login-main-content">
        <div className="login-middle-menu">

          <h1 className="login-title">Log In</h1>

          {this.handleErrors()}

          <div className="login-entry">

            <form onSubmit={this.handleDemoSubmit}>
              <button type="submit" className="login-link-demo">
                <FaAddressCard className="login-react-icon" />
                <div>Log in using Demo</div>
              </button>
            </form>

            <div className="login-or">Or log in with email</div>

            <form onSubmit={this.handleSubmit} className="login-form">
              <input className="login-input-email" type="text" value={this.state.email} placeholder="Your Email" onChange={this.update('email')}/>
              <input className="login-input-password" type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')}/>
              <div className="login-remember">
                <input type="checkbox" />
                    Remember me
              </div>
              <br/>
              <button className="login-button" type="submit">Log In</button>
            </form>

            <Link to="/" className="login-forgot">Forgot your password?</Link>

          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;