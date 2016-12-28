/**
*
* CreateGroupForm
*
*/

import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const DESCRIPTION_PATTERN = /[a-z0-9ęóąśłżźćń-]+/i;
const NAME_PATTERN = /[a-z0-9]+/;
const OWNER_PATTERN = NAME_PATTERN;

class CreateGroupForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    button: React.PropTypes.element,
    header: React.PropTypes.element,
    description: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    owner: React.PropTypes.string.isRequired,
    onDescriptionChange: React.PropTypes.func.isRequired,
    onNameChange: React.PropTypes.func.isRequired,
    onOwnerChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
  };

  validateForm() {
    return {
      name: NAME_PATTERN.test(this.props.name),
      description: DESCRIPTION_PATTERN.test(this.props.description),
      owner: OWNER_PATTERN.test(this.props.owner),
    };
  }

  render() {
    const valid = this.validateForm();
    const allValid = valid.description && valid.name && valid.owner;
    return (
      <Card style={{ margin: '100px auto', padding: 50, width: 800 }} >
        <CardTitle title={this.props.header} />
        <div>
          <TextField
            hintText={<FormattedMessage {...messages.nameHint} />}
            onChange={this.props.onNameChange}
            value={this.props.name}
            errorText={!valid.name ? <span /> : null}
            fullWidth
            floatingLabelText={<FormattedMessage {...messages.nameLabel} />}
            floatingLabelFixed
          />
          <TextField
            hintText={<FormattedMessage {...messages.ownerHint} />}
            onChange={this.props.onOwnerChange}
            value={this.props.owner}
            errorText={!valid.owner ? <span /> : null}
            fullWidth
            floatingLabelText={<FormattedMessage {...messages.ownerLabel} />}
            floatingLabelFixed
          />
          <TextField
            hintText={<FormattedMessage {...messages.descriptionHint} />}
            onChange={this.props.onDescriptionChange}
            value={this.props.description}
            errorText={!valid.description ? <span /> : null}
            fullWidth
            floatingLabelText={<FormattedMessage {...messages.descriptionLabel} />}
            floatingLabelFixed
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

export default CreateGroupForm;
