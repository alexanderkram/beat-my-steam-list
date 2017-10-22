import React, { Component } from 'react';

class UserForm extends Component {
  constructor() {
    super();

    this.state = {
      userId: null,
    };
  }

  render() {
    return (
      <form className="UserForm">
        <input type="text" className="UserForm__input" />
        <button className="UserForm__button">Search</button>
      </form>
    );
  }
}

export default UserForm;
