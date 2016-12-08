/*
 *
 * LoginForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import messages from './messages';
import selectLoginForm from './selectors';
import { setUsername, setPassword, requestLogin } from './actions';

export class LoginForm extends React.PureComponent {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    username: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    error: React.PropTypes.bool.isRequired,
  }
  constructor() {
    super();
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onUsernameChange(_e, username) {
    this.props.dispatch(setUsername(username));
  }
  onPasswordChange(_e, password) {
    this.props.dispatch(setPassword(password));
  }
  onSubmit() {
    this.props.dispatch(requestLogin());
  }
  render() {
    return (
      <Card style={{ margin: '100px auto', padding: 50, width: 400 }} >
        <CardTitle title={<FormattedMessage {...messages.header} />} />
        <div>
          <TextField
            hintText={<FormattedMessage {...messages.usernameHint} />}
            onChange={this.onUsernameChange}
            value={this.props.username}
            errorText={this.props.error ? <span /> : null}
            fullWidth
            floatingLabelText={<FormattedMessage {...messages.username} />}
            floatingLabelFixed
          />
          <br />
          <TextField
            type="password"
            onChange={this.onPasswordChange}
            value={this.props.password}
            errorText={this.props.error ? <FormattedMessage {...messages.error} /> : null}
            fullWidth
            floatingLabelText={<FormattedMessage {...messages.password} />}
            floatingLabelFixed
          />
          <br />
          <RaisedButton
            onClick={this.onSubmit}
            primary
            fullWidth
            label={<FormattedMessage {...messages.login} />}
          />
        </div>
      </Card>
    );
  }
}

const mapStateToProps = selectLoginForm();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
