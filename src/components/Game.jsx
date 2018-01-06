import React from 'react';
import PropTypes from 'prop-types';

const Game = (props) => {
  const { logo, name, playtimeForever } = props.details;

  return (
    <div className="Game" {...props}>
      <div className="Game__inner">
        <img src={logo} alt={name} />
        <h3 className="Game__title">{name}</h3>
        <p>Played for {playtimeForever} minutes</p>
      </div>
    </div>
  );
};

Game.propTypes = {
  details: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    playtimeForever: PropTypes.number.isRequired,
  }).isRequired,
};

export default Game;
