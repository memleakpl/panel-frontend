/*
 *
 * UserForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectUserForm from './selectors';
import { setUsername, setFirstName, setLastName, setEmail } from './actions';
import UserFormComponent from '../../components/UserFormComponent';

export class UserForm extends React.PureComponent {
  static propTypes = {
    button: React.PropTypes.element.isRequired,
    header: React.PropTypes.element,
    email: React.PropTypes.string,
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    username: React.PropTypes.string,
    disableUsername: React.PropTypes.bool,
    dispatch: React.PropTypes.func,
    onSubmit: React.PropTypes.func.isRequired,
  };

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
      <UserFormComponent
        button={this.props.button}
        header={this.props.header}
        email={this.props.email}
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        username={this.props.username}
        disableUsername={this.props.disableUsername}
        onUsernameChange={this.onUsernameChange}
        onFirstNameChange={this.onFirstNameChange}
        onLastNameChange={this.onLastNameChange}
        onEmailChange={this.onEmailChange}
        onSubmit={this.props.onSubmit}
      />
    );
  }
}

const mapStateToProps = selectUserForm();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
