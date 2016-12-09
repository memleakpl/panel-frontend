/*
 *
 * EditUser
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectEditUser from './selectors';
import UserForm from '../UserForm';
import { requestUserFetch } from './actions';


export class EditUser extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    params: React.PropTypes.shape({
      username: React.PropTypes.string.isRequired,
    }).isRequired,
  }
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(requestUserFetch(this.props.params.username));
  }
  onSubmit() {
    // this.props.dispatch(requestEditUser());
  }
  render() {
    return (
      <UserForm onSubmit={this.onSubmit} />
    );
  }
}

const mapStateToProps = selectEditUser();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
