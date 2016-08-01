import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Main from './components/main';
import Landing from './components/landing/landing';
import People from './components/people/peopleContainer';
import Person from './components/people/personContainer';

import NotFound from './components/notFoundPage';// TODO: Not working

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Landing} />
    <Route path="people" component={People}>
      <Route path=":personName" component={Person}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);
