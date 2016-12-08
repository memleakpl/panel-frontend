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
import { getUsers } from './actions';


export class UsersList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    users: React.PropTypes.arrayOf(USER_TYPE),
    dispatch: React.PropTypes.func,
  };
  componentDidMount() {
    this.props.dispatch(getUsers());
  }
  render() {
    return (
      <UsersTable users={this.props.users} />
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
