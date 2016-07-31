import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

import Landing from './landing';

describe('Landing', function () {

  it('should render', function () {
    var rendered = TestUtils.renderIntoDocument(<Landing />);
    expect(rendered).toBeDefined();
  });

});
