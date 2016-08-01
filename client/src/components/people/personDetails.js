import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import _ from 'lodash';

class PersonDetails extends React.Component {
  render() {
    if (this.props.person) {
      let fields = _.keys(this.props.person);
      return (
        <form className="form-horizontal">
          <FormGroup>
            {
              fields.map(field => {
                return [
                  <ControlLabel className="col-md-2" key={`key_${field}`}>{field}</ControlLabel>,
                  <FormControl.Static className="col-md-10" key={`value_${field}`}>{this.props.person[field]}</FormControl.Static>
                ];
              })
            }
          </FormGroup>
        </form>
      );
    } else {
      return null;
    }
  }
}

PersonDetails.propTypes = {
  person: React.PropTypes.object
};

export default PersonDetails;
