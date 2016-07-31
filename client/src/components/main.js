import React from 'react';
import {Grid} from 'react-bootstrap';

class Main extends React.Component {
  render() {
    return <Grid>{this.props.children}</Grid>;
  }
}

Main.propTypes = {
  children: React.PropTypes.node
};

export default Main;
