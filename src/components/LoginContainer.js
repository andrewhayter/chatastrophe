import React, { Component } from 'react';
import Header from './header';

class LoginContainer extends Component {
  state = { email: '', password: '', error: '' };

  handleeMailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onLogin = () => {
    this.props.history.push('/');
  }

  signup = () => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(res => {
      this.onLogin();
    })
    .catch(error => {
      this.setState({ error: 'Error signing up.' });
    }); }

    login = () => {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        this.onLogin();
      })
      .catch(err => {
        if (err.code === 'auth/user-not-found') {
          this.signup();
        } else {
          this.setState({ error: 'Error logging in.'});
        }
      })
    }


    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({error: ''});
      if (this.state.email && this.state.password) {
        this.login();
      } else {
        this.setState({error: 'Please fill out both fields.'})
      }
    }

    render() {
      return (
        <div id="LoginContainer" className="inner-container">
          <Header />
            <form onSubmit={this.handleSubmit}>
              <p>Sign in or signup by entering your email and password</p>
              <input onChange={this.handleeMailChange} type="text" placeholder="Your email" />
              <input onChange={this.handlePasswordChange} type="password" placeholder="Your password" />
              <p className="error">{this.state.error}</p>
              <button className="red light" type="submit">Login</button>
            </form>
        </div>
      )
    }
  }

  export default LoginContainer;
