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
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { FormattedMessage } from 'react-intl';
import CircularProgress from 'material-ui/CircularProgress';
import { redA700 } from 'material-ui/styles/colors';
import { USER_TYPE } from './constants';
import messages from './messages';


class UsersTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    users: React.PropTypes.arrayOf(USER_TYPE),
    error: React.PropTypes.bool.isRequired,
    loading: React.PropTypes.bool.isRequired,
    editUser: React.PropTypes.func,
    startDeleteUser: React.PropTypes.func,
    cancelDeleteUser: React.PropTypes.func,
    deleteUser: React.PropTypes.func,
    deletionUser: React.PropTypes.string,
  };

  constructor() {
    super();
    this.editUser = this.editUser.bind(this);
    this.cancelDeleteUser = this.cancelDeleteUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  editUser(username) {
    this.props.editUser(username);
  }
  startDeleteUser(username) {
    this.props.startDeleteUser(username);
  }
  cancelDeleteUser() {
    this.props.cancelDeleteUser();
  }
  deleteUser() {
    this.props.deleteUser(this.props.deletionUser);
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
          <IconButton onClick={() => this.startDeleteUser(user.username)}>
            <FontIcon className="material-icons" >delete_forever</FontIcon>
          </IconButton>
        </TableRowColumn>
      </TableRow>
    );
  }
  renderTable() {
    const rows = this.props.users.map((user) =>
      this.createTableRow(user)
    );
    const actions = [
      <FlatButton
        label={<FormattedMessage {...messages.deleteDialogCancel} />}
        onClick={this.cancelDeleteUser}
      />,
      <FlatButton
        label={<FormattedMessage {...messages.deleteDialogConfirm} />}
        primary
        onClick={this.deleteUser}
      />,
    ];

    return (
      <div>
        <Dialog modal actions={actions} open={this.props.deletionUser != null}>
          <FormattedMessage {...messages.deleteDialogBody} values={{ username: this.props.deletionUser }} />
        </Dialog>
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
      </div>
    );
  }
  render() {
    const error = this.props.error ?
      (
        <div style={{ margin: '30px', color: redA700 }}>
          <FormattedMessage {...messages.getUsersErrorMessage} />
        </div>
      ) :
      undefined;
    const loading = this.props.loading ? <CircularProgress style={{ margin: '30px' }} /> : undefined;
    const table = (!this.props.loading && !this.props.error) ? this.renderTable() : undefined;

    return (
      <Card style={{ margin: '25px', marginLeft: '9%', paddingTop: 10 }}>
        <CardTitle title={<FormattedMessage {...messages.usersList} />} />
        <div style={{ textAlign: 'center' }}>
          {error}
          {loading}
          {table}
        </div>
      </Card>
    );
  }
}

export default UsersTable;
