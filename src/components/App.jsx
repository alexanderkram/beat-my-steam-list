import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Search from './Search';
import UserPage from './UserPage';
import NotFound from './NotFound';

class App extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  state = {
    user: {
      id: '',
      name: '',
      avatar: '',
      url: '',
      games: {},
    },
  };

  addUser = (player, games) => {
    // copy actual user
    const user = { ...this.state.user };
    // add new summaries to user
    user.id = player.steamId;
    user.name = player.personaName;
    user.avatar = player.avatarFull;
    user.url = player.profileUrl;
    user.games = games;
    // set state
    this.setState({ user });
    // change page
    this.goToUserPage(this.state.user.name);
  };

  goToUserPage = (userId) => {
    const { router } = this.context;
    router.history.push(`/user/${userId}`);
  };

  renderSearch = () => (
    <Search
      user={this.state.user}
      addUser={this.addUser}
      goToUserPage={this.goToUserPage}
    />
  );

  render() {
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={this.renderSearch}
        />
        <Route
          path="/user/:userId"
          exact
          render={() => (<UserPage user={this.state.user} />)}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
