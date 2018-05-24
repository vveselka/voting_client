import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { setState } from './action_creators';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { VotingContainer } from './components/Voting';
import io from 'socket.io-client';
import remoteActionMiddleware from './remote_action_middleware';

import { ResultsContainer } from './components/Results';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

const { location } = window;
const socket = io(`${location.protocol}//${location.hostname}:8090`);

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore); // ????

const store = createStoreWithMiddleware(reducer);

socket.on('state', state => {
  /// why?
  store.dispatch(setState(state));
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={props => <VotingContainer {...props} />}
        />
        <Route
          path="/results"
          render={props => <ResultsContainer {...props} />}
        />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
