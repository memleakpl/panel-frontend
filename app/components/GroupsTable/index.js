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
import { redA700 } from 'material-ui/styles/colors';
import messages from './messages';
import { GROUP_TYPE } from './constants';
import { CARD_STYLE } from '../../styles';

class GroupsTable extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    groups: React.PropTypes.arrayOf(GROUP_TYPE),
    error: React.PropTypes.bool.isRequired,
    loading: React.PropTypes.bool.isRequired,
    startDeleteGroup: React.PropTypes.func,
    cancelDeleteGroup: React.PropTypes.func,
    deleteGroup: React.PropTypes.func,
    editGroup: React.PropTypes.func,
    deletionGroup: React.PropTypes.string,
  };
  constructor() {
    super();
    this.startDeleteGroup = this.startDeleteGroup.bind(this);
    this.cancelDeleteGroup = this.cancelDeleteGroup.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
    this.editGroup = this.editGroup.bind(this);
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
  editGroup(groupname) {
    this.props.editGroup(groupname);
  }
  createTableRow(group) {
    return (
      <TableRow key={group.name}>
        <TableRowColumn>{group.name}</TableRowColumn>
        <TableRowColumn>{group.owner}</TableRowColumn>
        <TableRowColumn>{group.description}</TableRowColumn>
        <TableRowColumn>
          <IconButton onClick={() => this.editGroup(group.name)}>
            <FontIcon className="material-icons" >mode_edit</FontIcon>
          </IconButton>
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
  render() {
    const error = this.props.error ?
      (<div style={{ margin: '30px', color: redA700 }}>
        <FormattedMessage {...messages.getGroupsErrorMessage} />
      </div>) :
      undefined;
    const loading = this.props.loading ? <CircularProgress style={{ margin: '30px' }} /> : undefined;
    const table = (!this.props.loading && !this.props.error) ? this.renderTable() : undefined;
    return (
      <Card style={{ ...CARD_STYLE, maxWidth: 1400, padding: 0 }} >
        <CardTitle title={<FormattedMessage {...messages.groupsList} />} />
        <div style={{ textAlign: 'center' }}>
          {error}
          {loading}
          {table}
        </div>
      </Card>
    );
  }
}

export default GroupsTable;
