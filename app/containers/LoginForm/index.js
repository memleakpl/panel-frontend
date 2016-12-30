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
import { CARD_STYLE } from '../../styles';

export class LoginForm extends React.PureComponent {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    username: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    loading: React.PropTypes.bool.isRequired,
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
  onSubmit(e) {
    this.props.dispatch(requestLogin());
    e.preventDefault();
  }
  render() {
    return (
      <Card style={{ ...CARD_STYLE, maxWidth: 400 }} >
        <CardTitle title={<FormattedMessage {...messages.header} />} />
        <form onSubmit={this.onSubmit}>
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
            type="submit"
            primary
            fullWidth
            disabled={this.props.loading}
            label={<FormattedMessage {...messages.login} />}
          />
        </form>
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
