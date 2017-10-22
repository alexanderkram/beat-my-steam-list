/* global document */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import WebFont from 'webfontloader';

import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Open Sans', 'sans-serif'],
  },
});

const Root = () => (
  <Router>
    <App />
  </Router>
);

render(<Root />, document.getElementById('root'));
registerServiceWorker();
