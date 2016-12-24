/*
 *
 * ChangePasswordForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import selectChangePasswordForm from './selectors';
import messages from './messages';
import { setNewPassword, setOldPassword, setRepeatPassword, changePasswordRequest } from './actions';


export class ChangePasswordForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    oldPassword: React.PropTypes.string.isRequired,
    newPassword: React.PropTypes.string.isRequired,
    repeatPassword: React.PropTypes.string.isRequired,
    error: React.PropTypes.bool.isRequired,
  }
  constructor() {
    super();
    this.onOldPasswordChange = this.onOldPasswordChange.bind(this);
    this.onNewPasswordChange = this.onNewPasswordChange.bind(this);
    this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onOldPasswordChange(_e, oldPassword) {
    this.props.dispatch(setOldPassword(oldPassword));
  }
  onNewPasswordChange(_e, newPassword) {
    this.props.dispatch(setNewPassword(newPassword));
  }
  onRepeatPasswordChange(_e, repeatPassword) {
    this.props.dispatch(setRepeatPassword(repeatPassword));
  }
  onSubmit(e) {
    this.props.dispatch(changePasswordRequest());
    e.preventDefault();
  }
  validateForm() {
    return {
      oldPasswordNotEmpty: this.props.oldPassword.length > 0,
      newPasswordNotEmpty: this.props.newPassword.length > 0,
      matchingNewPassword: this.props.newPassword === this.props.repeatPassword,
    };
  }
  createRepeatPasswordErrorText(valid) {
    if (!valid.newPasswordNotEmpty) {
      return <span />;
    } else if (!valid.matchingNewPassword) {
      return <FormattedMessage {...messages.notMatchingError} />;
    }
    return null;
  }
  createOldPasswordErrorText(valid) {
    if (this.props.error) {
      return <FormattedMessage {...messages.error} />;
    } else if (!valid.oldPasswordNotEmpty) {
      return <span />;
    }
    return null;
  }
  render() {
    const valid = this.validateForm();
    const repeatErrorText = this.createRepeatPasswordErrorText(valid);
    const oldPasswordErrorText = this.createOldPasswordErrorText(valid);
    const allValid = valid.oldPasswordNotEmpty && valid.newPasswordNotEmpty && valid.matchingNewPassword;
    return (
      <Card style={{ margin: '100px auto', padding: 50, width: 800 }}>
        <CardTitle title={<FormattedMessage {...messages.header} />} />
        <form onSubmit={this.onSubmit}>
          <TextField
            type="password"
            fullWidth
            errorText={oldPasswordErrorText}
            onChange={this.onOldPasswordChange}
            value={this.props.oldPassword}
            floatingLabelText={<FormattedMessage {...messages.oldPassword} />}
            floatingLabelFixed
          />
          <br />
          <TextField
            type="password"
            fullWidth
            onChange={this.onNewPasswordChange}
            errorText={!valid.newPasswordNotEmpty ? <span /> : null}
            value={this.props.newPassword}
            floatingLabelText={<FormattedMessage {...messages.newPassword} />}
            floatingLabelFixed
          />
          <br />
          <TextField
            type="password"
            fullWidth
            onChange={this.onRepeatPasswordChange}
            errorText={repeatErrorText}
            value={this.props.repeatPassword}
            floatingLabelText={<FormattedMessage {...messages.repeatNewPassword} />}
            floatingLabelFixed
          />
          <br />
          <RaisedButton
            type="submit"
            disabled={!allValid}
            fullWidth
            primary
            label={<FormattedMessage {...messages.changePassword} />}
          />
        </form>
      </Card>
    );
  }
}

const mapStateToProps = selectChangePasswordForm();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordForm);
