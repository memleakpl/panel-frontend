/*
 *
 * CreateUser
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectCreateUser from './selectors';
import { requestCreateUser } from './actions';
import UserForm from '../UserForm';

export class CreateUser extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    this.props.dispatch(requestCreateUser());
  }
  render() {
    return (
      <UserForm onSubmit={this.onSubmit} />
    );
  }
}

const mapStateToProps = selectCreateUser();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
