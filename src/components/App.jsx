import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Search from './Search';
import UserPage from './UserPage';
import NotFound from './NotFound';

class App extends React.Component {
  state = {
    user: {
      id: '',
      name: '',
      avatar: '',
      url: '',
      games: {},
    },
  };

  static contextTypes = {
    router: PropTypes.object,
  };

  addUser = player => {
    // copy actual user
    const user = { ...this.state.user };
    // add new summaries to user
    user.id = player.steamId;
    user.name = player.personaName;
    user.avatar = player.avatarFull;
    user.url = player.profileUrl;
    // set state
    this.setState({ user });
  };

  addGames = games => {
    // copy actual user
    const user = { ...this.state.user };
    // add new games to user
    user.games = games;
    // set state
    this.setState({ user });
  };

  goToUserPage = () => {
    const { router } = this.context;
    router.history.push(`/user/${this.state.user.name}`);
  };

  render() {
    return (
      <Switch>
        <Route path="/" exact render={props => (
          <Search
            user={this.state.user}
            addUser={this.addUser}
            addGames={this.addGames} 
            goToUserPage={this.goToUserPage} 
          />
        )} />
        <Route path="/user/:userId" exact render={() => (
          <UserPage user={this.state.user} />
        )} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
