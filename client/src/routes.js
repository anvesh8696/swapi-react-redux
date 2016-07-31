import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Main from './components/main';
import Landing from './components/landing/landing';
import People from './components/people/peopleContainer';

import NotFound from './components/notFoundPage';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Landing} />
    <Route path="people" component={People}/>
    <Route path="*" component={NotFound} />
  </Route>
);
