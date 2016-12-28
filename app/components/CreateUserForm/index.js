/**
*
* CreateUserForm
*
*/

import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { CARD_STYLE } from '../../styles';


const USERNAME_PATTERN = /[a-z0-9]+/;
const EMAIL_PATTERN = /^([\w.+-]+)@([\w-]+\.)*([\w-]+)$/i;
const NAME_PATTERN = /[a-z0-9ęóąśłżźćń-]+/i;

class CreateUserForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    username: React.PropTypes.string.isRequired,
    onUsernameChange: React.PropTypes.func.isRequired,
    firstName: React.PropTypes.string.isRequired,
    onFirstNameChange: React.PropTypes.func.isRequired,
    lastName: React.PropTypes.string.isRequired,
    onLastNameChange: React.PropTypes.func.isRequired,
    email: React.PropTypes.string.isRequired,
    onEmailChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func,
    header: React.PropTypes.element,
    button: React.PropTypes.element,
  }

  validateForm() {
    return {
      username: USERNAME_PATTERN.test(this.props.username),
      firstName: NAME_PATTERN.test(this.props.firstName),
      lastName: NAME_PATTERN.test(this.props.lastName),
      email: EMAIL_PATTERN.test(this.props.email),
    };
  }

  render() {
    const valid = this.validateForm();
    const allValid = valid.username && valid.firstName && valid.lastName && valid.email;
    return (
      <Card style={CARD_STYLE} >
        <CardTitle title={this.props.header} />
        <div>
          <TextField
            hintText={<FormattedMessage {...messages.usernameHint} />}
            onChange={this.props.onUsernameChange}
            value={this.props.username}
            errorText={!valid.username ? <span /> : null}
            fullWidth
            floatingLabelText={<FormattedMessage {...messages.usernameLabel} />}
            floatingLabelFixed
          />
          <div style={{ width: '100%' }}>
            <TextField
              hintText={<FormattedMessage {...messages.firstNameHint} />}
              onChange={this.props.onFirstNameChange}
              value={this.props.firstName}
              errorText={!valid.firstName ? <span /> : null}
              floatingLabelText={<FormattedMessage {...messages.firstNameLabel} />}
              floatingLabelFixed
              style={{ width: '48%', marginRight: '2%' }}
            />
            <TextField
              hintText={<FormattedMessage {...messages.lastNameHint} />}
              onChange={this.props.onLastNameChange}
              value={this.props.lastName}
              errorText={!valid.lastName ? <span /> : null}
              floatingLabelText={<FormattedMessage {...messages.lastNameLabel} />}
              floatingLabelFixed
              style={{ width: '48%', marginLeft: '2%' }}
            />
          </div>
          <TextField
            type="email"
            hintText={<FormattedMessage {...messages.emailHint} />}
            onChange={this.props.onEmailChange}
            value={this.props.email}
            errorText={!valid.email ? <span /> : null}
            floatingLabelText={<FormattedMessage {...messages.emailLabel} />}
            floatingLabelFixed
            fullWidth
          />
          <RaisedButton
            onClick={this.props.onSubmit}
            disabled={!allValid}
            primary
            fullWidth
            label={this.props.button}
          />
        </div>
      </Card>
    );
  }
}

export default CreateUserForm;
