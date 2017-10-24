import React from 'react';
import PropTypes from 'prop-types';

import Game from './Game';

const User = (props) => {
  const {
    avatar, name, url, games,
  } = props.details;

  return (
    <div className="User">
      <img src={avatar} alt={name} />
      <h2>Your Account: {name}</h2>
      <p>URL: {url}</p>
      {Object.keys(games).map(key => (
        <Game key={games[key].appId} details={games[key]} />
      ))}
    </div>
  );
};

User.propTypes = {
  details: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    games: PropTypes.isRequired,
  }).isRequired,
};

export default User;
