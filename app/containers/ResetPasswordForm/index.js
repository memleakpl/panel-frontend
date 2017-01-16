/*
 *
 * ResetPasswordForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { CARD_STYLE } from '../../styles';

import selectResetPasswordForm from './selectors';
import messages from './messages';
import { setUsername, setEmail, resetPassword } from './actions';


export class ResetPasswordForm extends React.PureComponent {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    username: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    loading: React.PropTypes.bool.isRequired,
    error: React.PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onUsernameChange(_e, username) {
    this.props.dispatch(setUsername(username));
  }
  onEmailChange(_e, password) {
    this.props.dispatch(setEmail(password));
  }
  onSubmit(e) {
    this.props.dispatch(resetPassword());
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
            hintText={<FormattedMessage {...messages.emailHint} />}
            type="e-mail"
            onChange={this.onEmailChange}
            value={this.props.email}
            errorText={this.props.error ? <span /> : null}
            fullWidth
            floatingLabelText={<FormattedMessage {...messages.email} />}
            floatingLabelFixed
          />
          <br />
          <RaisedButton
            type="submit"
            primary
            fullWidth
            disabled={this.props.loading}
            label={<FormattedMessage {...messages.reset} />}
          />
        </form>
      </Card>
    );
  }
}

const mapStateToProps = selectResetPasswordForm();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);
