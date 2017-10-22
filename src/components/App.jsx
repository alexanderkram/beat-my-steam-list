import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import UserPage from './UserPage';
import NotFound from './NotFound';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/user/:userId" exact component={UserPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
