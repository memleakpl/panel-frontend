/*
 *
 * UsersList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectUsersList from './selectors';
import UsersTable from '../../components/UsersTable';
import { USER_TYPE } from '../../components/UsersTable/constants';
import { getUsers, setSelectedUser } from './actions';


export class UsersList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    users: React.PropTypes.arrayOf(USER_TYPE),
    dispatch: React.PropTypes.func,
    selectedUser: React.PropTypes.string.isRequired,
  };
  constructor() {
    super();
    this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(getUsers());
  }
  onSelectionChange(selectedRows) {
    const selectedUser = selectedRows.length > 0 ? this.props.users[selectedRows[0]].username : '';
    this.props.dispatch(setSelectedUser(selectedUser));
  }
  render() {
    return (
      <UsersTable users={this.props.users} onSelectionChange={this.onSelectionChange} selectedUser={this.props.selectedUser} />
    );
  }

}

const mapStateToProps = selectUsersList();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
