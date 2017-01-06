/**
*
* JoinGroupComponent
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';

import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

import messages from './messages';

function JoinGroupComponent({ header, value, groups, buttonDisabled, onUpdateInput, onSubmit }) {
  return (
    <div>
      {header}
      <form onSubmit={(e) => { onSubmit(); e.preventDefault(); }}>
        <AutoComplete
          dataSource={groups}
          value={value}
          floatingLabelText={<FormattedMessage {...messages.inputLabel} />}
          floatingLabelFixed
          hintText={<FormattedMessage {...messages.inputHint} />}
          fullWidth
          onUpdateInput={(searchText) => onUpdateInput(searchText)}
        />
        <RaisedButton
          type="submit"
          label={<FormattedMessage {...messages.buttonLabel} />}
          primary
          disabled={buttonDisabled || !groups.includes(value)}
        />
      </form>
    </div>
  );
}
JoinGroupComponent.propTypes = {
  header: React.PropTypes.element,
  value: React.PropTypes.string.isRequired,
  groups: React.PropTypes.array.isRequired,
  buttonDisabled: React.PropTypes.bool.isRequired,
  onUpdateInput: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
};

export default JoinGroupComponent;
