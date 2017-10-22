import React, { Component } from 'react';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      userId: null,
    };
  }

  render() {
    return (
      <form className="LoginForm">
        <input type="text" className="LoginForm__input" />
        <button className="LoginForm__button">Login</button>
      </form>
    );
  }
}

export default LoginForm;
