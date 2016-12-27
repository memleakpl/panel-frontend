/**
*
* GroupsTable
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import CircularProgress from 'material-ui/CircularProgress';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Card, CardTitle } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import messages from './messages';
import { GROUP_TYPE } from './constants';

class GroupsTable extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    groups: React.PropTypes.arrayOf(GROUP_TYPE),
    error: React.PropTypes.bool.isRequired,
    loading: React.PropTypes.bool.isRequired,
    startDeleteGroup: React.PropTypes.func,
    cancelDeleteGroup: React.PropTypes.func,
    deleteGroup: React.PropTypes.func,
    deletionGroup: React.PropTypes.string,
  };
  constructor() {
    super();
    this.startDeleteGroup = this.startDeleteGroup.bind(this);
    this.cancelDeleteGroup = this.cancelDeleteGroup.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
  }

  startDeleteGroup(groupname) {
    this.props.startDeleteGroup(groupname);
  }
  cancelDeleteGroup() {
    this.props.cancelDeleteGroup();
  }
  deleteGroup() {
    this.props.deleteGroup(this.props.deletionGroup);
  }
  createTableRow(group) {
    return (
      <TableRow key={group.name}>
        <TableRowColumn>{group.name}</TableRowColumn>
        <TableRowColumn>{group.owner}</TableRowColumn>
        <TableRowColumn>{group.description}</TableRowColumn>
        <TableRowColumn>
          <IconButton onClick={() => this.startDeleteGroup(group.name)}>
            <FontIcon className="material-icons" >delete_forever</FontIcon>
          </IconButton>
        </TableRowColumn>
      </TableRow>
    );
  }
  renderTable() {
    const rows = this.props.groups.map((group) =>
      this.createTableRow(group)
    );
    const actions = [
      <FlatButton
        label={<FormattedMessage {...messages.deleteDialogCancel} />}
        onClick={this.cancelDeleteGroup}
      />,
      <FlatButton
        label={<FormattedMessage {...messages.deleteDialogConfirm} />}
        primary
        onClick={this.deleteGroup}
      />,
    ];
    return (
      <div>
        <Dialog modal actions={actions} open={this.props.deletionGroup != null}>
          <FormattedMessage {...messages.deleteDialogBody} values={{ groupname: this.props.deletionGroup }} />
        </Dialog>
        <Table bordered fixedHeader={false} selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn><FormattedMessage {...messages.name} /></TableHeaderColumn>
              <TableHeaderColumn><FormattedMessage {...messages.owner} /></TableHeaderColumn>
              <TableHeaderColumn><FormattedMessage {...messages.description} /></TableHeaderColumn>
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
  renderComponent() {
    if (this.props.error) {
      return (
        <div style={{ textAlign: 'center' }}>
          <FormattedMessage {...messages.getGroupsErrorMessage} />
        </div>
      );
    } else if (this.props.loading) {
      return (
        <div style={{ textAlign: 'center' }}>
          <CircularProgress />
        </div>
      );
    }
    return this.renderTable();
  }
  render() {
    return (
      <Card style={{ margin: '25px', marginLeft: '9%', paddingTop: 10 }} >
        <CardTitle title={<FormattedMessage {...messages.groupsList} />} />
        {this.renderComponent()}
      </Card>
    );
  }
}

export default GroupsTable;
