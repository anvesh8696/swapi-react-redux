/* eslint no-undef: 0 */
import ReactDOM from 'react-dom';
import React from 'react';
import createReduxStore from './createReduxStore';
import Root from './root';

const store = createReduxStore();

ReactDOM.render(<Root store={store} />, document.getElementById('app'));
