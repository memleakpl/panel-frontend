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
import messages from './messages';
import { GROUP_TYPE } from './constants';

class GroupsTable extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    groups: React.PropTypes.arrayOf(GROUP_TYPE),
    error: React.PropTypes.bool.isRequired,
    loading: React.PropTypes.bool.isRequired,
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
  renderTable() {
    const rows = this.props.groups.map((group) =>
      this.createTableRow(group)
    );
    return (
      <div>
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
