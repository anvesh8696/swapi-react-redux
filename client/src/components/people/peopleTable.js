import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import _ from 'lodash';

class PeopleTable extends React.Component {
  render() {
    if (this.props.people && this.props.people.length) {
      let cols = _.keys(this.props.people[0]);
      return (
        <BootstrapTable
          ref="table"
          data={this.props.people}
          pagination={true}
          options={{
            sortName: 'name',
            sortOrder: 'asc'}}>
          <TableHeaderColumn dataField="url" hidden={true} isKey={true}/>
          {
            cols.map(column => <TableHeaderColumn key={column} dataField={column} dataSort={true}>{_.startCase(column)}</TableHeaderColumn>)
          }
        </BootstrapTable>
      );
    } else {
      return null;
    }
  }
}

PeopleTable.propTypes = {
  people: React.PropTypes.array
};

export default PeopleTable;
