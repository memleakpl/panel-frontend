/*
 *
 * UsersList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import selectUsersList from './selectors';
import UsersTable from '../../components/UsersTable';
import { USER_TYPE } from '../../components/UsersTable/constants';
import { getUsers, setDeletionUser, deleteUserRequest } from './actions';


export class UsersList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    users: React.PropTypes.arrayOf(USER_TYPE),
    dispatch: React.PropTypes.func,
    deletionUser: React.PropTypes.string,
  };
  constructor() {
    super();
    this.editUser = this.editUser.bind(this);
    this.startDeleteUser = this.startDeleteUser.bind(this);
    this.cancelDeleteUser = this.cancelDeleteUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(getUsers());
  }
  editUser(username) {
    this.props.dispatch(push(`/user/${username}`));
  }
  startDeleteUser(username) {
    this.props.dispatch(setDeletionUser(username));
  }
  deleteUser(username) {
    this.props.dispatch(deleteUserRequest(username));
  }
  cancelDeleteUser() {
    this.props.dispatch(setDeletionUser(null));
  }
  render() {
    return (
      <UsersTable
        users={this.props.users}
        deletionUser={this.props.deletionUser}
        editUser={this.editUser}
        startDeleteUser={this.startDeleteUser}
        cancelDeleteUser={this.cancelDeleteUser}
        deleteUser={this.deleteUser}
      />
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
