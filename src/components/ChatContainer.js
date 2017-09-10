import React, { Component } from 'react';
import Header from './header';

export default class ChatController extends Component {

  handleLogout = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <div id="ChatContainer">
        <Header>
          <button className="red" onClick={this.handleLogout}>
            Logout
          </button>
        </Header>
        <h1>Chat Container</h1>
      </div>
    )
  }
}
