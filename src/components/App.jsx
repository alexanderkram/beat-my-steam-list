import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './Search';
import UserPage from './UserPage';
import NotFound from './NotFound';

class App extends React.Component {
  state = {
    user: {
      name: '',
      avatar: '',
      url: '',
      games: {},
    },
  };

  addUser = player => {
    // copy actual user
    const user = { ...this.state.user };
    // add new summaries to user
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

  render() {
    return (
      <Switch>
        <Route path="/" exact render={props => <Search addUser={this.addUser} addGames={this.addGames} />} />
        <Route path="/user/:userId" exact component={UserPage} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
