/* eslint no-undef: 0, no-process-env: 0 */
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import app from './reducers/rootReducer';

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    app,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
