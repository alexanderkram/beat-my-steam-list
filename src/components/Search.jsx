import React from 'react';
import SteamApi from 'steam-api';
import PropTypes from 'prop-types';

import SearchForm from './SearchForm';

import api from './../config/api.json';

class Search extends React.Component {
  static propTypes = {
    addUser: PropTypes.func.isRequired,
  };

  searchUser = (steamId) => {
    const { addUser } = this.props;
    const steamApiPlayer = new SteamApi.Player(api.steam, steamId);
    const steamApiUser = new SteamApi.User(api.steam, steamId);

    steamApiUser.GetPlayerSummaries().done((user) => {
      steamApiPlayer.GetOwnedGames().done((games) => {
        if (user && games) {
          addUser(user, games);
        }
      });
    });
  };

  render() {
    return (
      <div className="Search">
        <div className="Search__inner">
          <h2>Enter your Steam ID</h2>
          <SearchForm searchUser={this.searchUser} />
          <p>
            <a href="http://steamid.co/" title="steamid.co">steamid.co</a> or <a href="http://steamidconverter.com/" title="steamidconverter.com">steamidconverter.com</a> to find the user steam id.
          </p>
        </div>
      </div>
    );
  }
}

export default Search;
