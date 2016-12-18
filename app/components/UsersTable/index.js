/**
*
* UsersTable
*
*/

import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Card, CardTitle } from 'material-ui/Card';
import { FormattedMessage } from 'react-intl';

import { USER_TYPE } from './constants';
import messages from './messages';


class UsersTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    users: React.PropTypes.arrayOf(USER_TYPE),
    onSelectionChange: React.PropTypes.func,
    selectedUser: React.PropTypes.string,
  };

  createTableRow(user) {
    const selected = this.props.selectedUser === user.username;
    return (
      <TableRow key={user.username} selected={selected}>
        <TableRowColumn>{user.username}</TableRowColumn>
        <TableRowColumn>{user.firstName}</TableRowColumn>
        <TableRowColumn>{user.lastName}</TableRowColumn>
        <TableRowColumn>{user.email}</TableRowColumn>
      </TableRow>
    );
  }
  render() {
    const rows = this.props.users.map((user) =>
      this.createTableRow(user)
    );
    return (
      <Card style={{ margin: '25px', paddingTop: 10 }}>
        <CardTitle title={<FormattedMessage {...messages.usersList} />} />
        <Table bordered fixedHeader={false} onRowSelection={this.props.onSelectionChange}>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn><FormattedMessage {...messages.username} /></TableHeaderColumn>
              <TableHeaderColumn><FormattedMessage {...messages.firstName} /></TableHeaderColumn>
              <TableHeaderColumn><FormattedMessage {...messages.lastName} /></TableHeaderColumn>
              <TableHeaderColumn><FormattedMessage {...messages.email} /></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows >
            {rows}
          </TableBody>
        </Table>
      </Card>
    );
  }

}


export default UsersTable;
