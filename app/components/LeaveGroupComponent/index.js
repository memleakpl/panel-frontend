/**
*
* LeaveGroupComponent
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Checkbox from 'material-ui/Checkbox';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';

import messages from './messages';

function LeaveGroupComponent({ groups, checkedGroups, buttonDisabled, onCheck, onSubmit }) {
  return (
    <div style={{ marginTop: '40px' }}>
      <Subheader>Current user groups</Subheader>
      <List>
        {groups.map((group) =>
          <ListItem
            key={group}
            primaryText={group}
            leftCheckbox={<Checkbox onCheck={() => onCheck(group)} checked={checkedGroups.includes(group)} />}
          />)}
      </List>
      <div>
        <RaisedButton
          label={<FormattedMessage {...messages.leaveButtonLabel} />}
          disabled={buttonDisabled || checkedGroups.length === 0}
          onClick={onSubmit}
          primary
        />
      </div>
    </div>
  );
}
LeaveGroupComponent.propTypes = {
  groups: React.PropTypes.array.isRequired,
  checkedGroups: React.PropTypes.array.isRequired,
  buttonDisabled: React.PropTypes.bool.isRequired,
  onCheck: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
};

export default LeaveGroupComponent;
