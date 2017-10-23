import React from 'react';

import Header from './Header';
import Game from './Game';

const UserPage = props => (
  <div className="UserPage">
    <Header />
    <div className="UserPage__inner">
      <img src={props.user.avatar} alt={props.user.name} />
      <h2>Your Account: {props.user.name}</h2>
      <p>URL: {props.user.url}</p>
      {Object
        .keys(props.user.games)
        .map(key => (
          <Game key={props.user.games[key].appId} details={props.user.games[key]} />
        ))
      }
    </div>
  </div>
);

export default UserPage;
