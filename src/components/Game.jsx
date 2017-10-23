import React from 'react';

const Game = props => (
  <div className="Game">
    <div className="Game__inner">
      <img src={props.details.logo} alt={props.details.name} />
      <h3 className="Game__title">{props.details.name}</h3>
      <p>Played for {props.details.playtimeForever} minutes</p>
    </div>
  </div>
);

export default Game;
