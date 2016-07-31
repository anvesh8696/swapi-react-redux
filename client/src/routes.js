import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Main from './components/main';
import Landing from './components/landing';

import NotFound from './components/notFoundPage';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Landing} />
    <Route path="*" component={NotFound} />
  </Route>
);
