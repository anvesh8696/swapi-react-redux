import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import PeopleList from './peopleList';

class PeopleView extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={3}>
            <PeopleList people={this.props.people} person={this.props.person}/>
          </Col>
          <Col md={9}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}

PeopleView.propTypes = {
  children: React.PropTypes.node,
  people: React.PropTypes.array,
  person: React.PropTypes.object
};

export default PeopleView;
