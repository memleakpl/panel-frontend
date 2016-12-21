/**
*
* UsersTable
*
*/

import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Card, CardTitle } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { FormattedMessage } from 'react-intl';

import { USER_TYPE } from './constants';
import messages from './messages';


class UsersTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    users: React.PropTypes.arrayOf(USER_TYPE),
    editUser: React.PropTypes.func,
  };

  constructor() {
    super();
    this.editUser = this.editUser.bind(this);
  }

  editUser(username) {
    this.props.editUser(username);
  }
  createTableRow(user) {
    return (
      <TableRow key={user.username}>
        <TableRowColumn>{user.username}</TableRowColumn>
        <TableRowColumn>{user.firstName}</TableRowColumn>
        <TableRowColumn>{user.lastName}</TableRowColumn>
        <TableRowColumn>{user.email}</TableRowColumn>
        <TableRowColumn>
          <IconButton onClick={() => this.editUser(user.username)}>
            <FontIcon className="material-icons" >mode_edit</FontIcon>
          </IconButton>
        </TableRowColumn>
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
        <Table bordered fixedHeader={false} selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn><FormattedMessage {...messages.username} /></TableHeaderColumn>
              <TableHeaderColumn><FormattedMessage {...messages.firstName} /></TableHeaderColumn>
              <TableHeaderColumn><FormattedMessage {...messages.lastName} /></TableHeaderColumn>
              <TableHeaderColumn><FormattedMessage {...messages.email} /></TableHeaderColumn>
              <TableHeaderColumn />
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


export default UsersTable;
