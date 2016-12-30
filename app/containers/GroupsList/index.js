/*
 *
 * GroupsList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectGroupsList from './selectors';
import GroupsTable from '../../components/GroupsTable';
import { GROUP_TYPE } from '../../components/GroupsTable/constants';
import { getGroupsRequest, setDeletionGroup, deleteGroupRequest } from './actions';

export class GroupsList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    groups: React.PropTypes.arrayOf(GROUP_TYPE),
    dispatch: React.PropTypes.func,
    error: React.PropTypes.bool.isRequired,
    loading: React.PropTypes.bool.isRequired,
    deletionGroup: React.PropTypes.string,
  };
  constructor() {
    super();
    this.startDeleteGroup = this.startDeleteGroup.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
    this.cancelDeleteGroup = this.cancelDeleteGroup.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(getGroupsRequest());
  }
  startDeleteGroup(groupname) {
    this.props.dispatch(setDeletionGroup(groupname));
  }
  deleteGroup(groupname) {
    this.props.dispatch(deleteGroupRequest(groupname));
  }
  cancelDeleteGroup() {
    this.props.dispatch(setDeletionGroup(null));
  }
  render() {
    return (
      <GroupsTable
        groups={this.props.groups}
        error={this.props.error}
        loading={this.props.loading}
        deletionGroup={this.props.deletionGroup}
        startDeleteGroup={this.startDeleteGroup}
        cancelDeleteGroup={this.cancelDeleteGroup}
        deleteGroup={this.deleteGroup}
      />
    );
  }
}

const mapStateToProps = selectGroupsList();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);
