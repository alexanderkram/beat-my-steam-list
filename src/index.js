/* global document */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WebFont from 'webfontloader';

import FindUser from './components/FindUser';
import App from './components/App';
import NotFound from './components/NotFound';

import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Open Sans', 'sans-serif'],
  },
});

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={FindUser} />
      <Route path="/user/:userId" exact component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

render(<Root />, document.getElementById('root'));
registerServiceWorker();
