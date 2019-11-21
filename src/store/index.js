import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import app from '../reducers';

const store = createStore(
    app,
    composeWithDevTools(applyMiddleware(/* createLogger()*/))
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    store.replaceReducer(require('../reducers/index'));
  });
}

export default store;
