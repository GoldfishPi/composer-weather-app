/* eslint-env browser */
/*
  Notes on React-Router:
  SuperCell uses "BrowserRouter" as a default so that when run on a cloud host
  routing will work correctly.  If you perfer you can change it to "hashHistory" in devlopment if you require frequest page refreshs.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <Router>
      <Component />
    </Router>,
    document.getElementById('app'),
  );
};

render(App);
