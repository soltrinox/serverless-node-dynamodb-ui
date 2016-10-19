import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'react-router-scroll/lib/useScroll';

import configureStore from './configureStore';
import routes from './routes';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
    />
  </Provider>,
  document.getElementById('root')
);
