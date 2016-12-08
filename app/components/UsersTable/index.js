/**
*
* UsersTable
*
*/

import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { USER_TYPE } from './constants';


class UsersTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    users: React.PropTypes.arrayOf(USER_TYPE),
  };
  createTableRow(user) {
    return (
      <TableRow key={user.username}>
        <TableRowColumn>{user.username}</TableRowColumn>
        <TableRowColumn>{user.fullName}</TableRowColumn>
        <TableRowColumn>{user.email}</TableRowColumn>
      </TableRow>
    );
  }
  render() {
    const rows = this.props.users.map((user) =>
      this.createTableRow(user)
    );
    return (
      <Table bordered fixedHeader={false}>
        <TableHeader tooltip="Users" style={{ textAlign: 'center' }}>
          <TableRow>
            <TableHeaderColumn>Username</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody stripedRows >
          {rows}
        </TableBody>
      </Table>
    );
  }

}


export default UsersTable;
