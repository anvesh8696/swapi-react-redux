import React from 'react';

class Main extends React.Component {
  render() {
    return this.props.children;
  }
}

Main.propTypes = {
  children: React.PropTypes.node
};

export default Main;
