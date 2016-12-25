/**
*
* GroupsTable
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Card, CardTitle } from 'material-ui/Card';
import messages from './messages';
import { GROUP_TYPE } from './constants';

class GroupsTable extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    groups: React.PropTypes.arrayOf(GROUP_TYPE),
  };
  createTableRow(group) {
    return (
      <TableRow key={group.name}>
        <TableRowColumn>{group.name}</TableRowColumn>
        <TableRowColumn>{group.owner}</TableRowColumn>
        <TableRowColumn>{group.description}</TableRowColumn>
      </TableRow>
    );
  }
  render() {
    const rows = this.props.groups.map((group) =>
      this.createTableRow(group)
    );
    return (
      <Card style={{ margin: '25px', marginLeft: '9%', paddingTop: 10 }} >
        <CardTitle title={<FormattedMessage {...messages.groupsList} />} />
        <Table bordered fixedHeader={false} selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn><FormattedMessage {...messages.name} /></TableHeaderColumn>
              <TableHeaderColumn><FormattedMessage {...messages.owner} /></TableHeaderColumn>
              <TableHeaderColumn><FormattedMessage {...messages.description} /></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows displayRowCheckbox={false}>
            {rows}
          </TableBody>
        </Table>
      </Card>
    );
  }
}

export default GroupsTable;
