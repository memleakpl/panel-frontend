/*
 *
 * CreateUser
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectCreateUser from './selectors';
import { setUsername, setFirstName, setLastName, setEmail } from './actions';
import CreateUserForm from '../../components/CreateUserForm';

export class CreateUser extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
  }
  onUsernameChange(_e, username) {
    this.props.dispatch(setUsername(username));
  }
  onFirstNameChange(_e, firstName) {
    this.props.dispatch(setFirstName(firstName));
  }
  onLastNameChange(_e, lastName) {
    this.props.dispatch(setLastName(lastName));
  }
  onEmailChange(_e, email) {
    this.props.dispatch(setEmail(email));
  }
  render() {
    return (
      <CreateUserForm
        {...this.props}
        onUsernameChange={this.onUsernameChange}
        onFirstNameChange={this.onFirstNameChange}
        onLastNameChange={this.onLastNameChange}
        onEmailChange={this.onEmailChange}
      />
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
