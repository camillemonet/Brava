import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text" value={this.state.username} onChange={this.update('username')} />
          </label>
          <label>Email:
            <input type="text" value={this.state.email} onChange={this.update('email')} />
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.update('password')} />
          </label>
          <button type="submit">Log in!</button>
        </form>
      </div>
    )
  }
}

export default SignupForm;