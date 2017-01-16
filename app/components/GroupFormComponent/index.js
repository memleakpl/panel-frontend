/**
*
* GroupFormComponent
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import messages from './messages';

const DESCRIPTION_PATTERN = /^[a-z0-9ęóąśłżźćń-]+$/i;
const NAME_PATTERN = /^[a-z0-9]+$/;
const OWNER_PATTERN = NAME_PATTERN;

class GroupFormComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    disabledName: React.PropTypes.bool.isRequired,
    button: React.PropTypes.element.isRequired,
    header: React.PropTypes.element,
    loading: React.PropTypes.bool.isRequired,
    description: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    owner: React.PropTypes.string.isRequired,
    onDescriptionChange: React.PropTypes.func.isRequired,
    onNameChange: React.PropTypes.func.isRequired,
    onOwnerChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    this.props.onSubmit();
    e.preventDefault();
  }

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
      <div>
        {this.props.header}
        <form onSubmit={this.onSubmit}>
          <TextField
            disabled={this.props.disabledName}
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
            type="submit"
            disabled={!allValid || this.props.loading}
            primary
            fullWidth
            label={this.props.button}
          />
        </form>
      </div>
    );
  }
}

export default GroupFormComponent;
