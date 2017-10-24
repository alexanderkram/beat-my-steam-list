import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Game from './Game';

const UserPage = (props) => {
  const {
    avatar, name, url, games,
  } = props.user;

  return (
    <div className="UserPage">
      <Header />
      <div className="UserPage__inner">
        <img src={avatar} alt={name} />
        <h2>Your Account: {name}</h2>
        <p>URL: {url}</p>
        {Object.keys(games).map(key => (
          <Game key={games[key].appId} details={games[key]} />
        ))}
      </div>
    </div>
  );
};

UserPage.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    games: PropTypes.isRequired,
  }).isRequired,
};

export default UserPage;
