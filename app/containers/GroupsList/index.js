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
import { getGroupsRequest } from './actions';

export class GroupsList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    groups: React.PropTypes.arrayOf(GROUP_TYPE),
    dispatch: React.PropTypes.func,
    error: React.PropTypes.bool.isRequired,
    loading: React.PropTypes.bool.isRequired,
  };
  componentDidMount() {
    this.props.dispatch(getGroupsRequest());
  }
  render() {
    return (
      <GroupsTable
        groups={this.props.groups}
        error={this.props.error}
        loading={this.props.loading}
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
