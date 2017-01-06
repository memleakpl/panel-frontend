/*
 *
 * EditUser
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { Card, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import { getUser, editUser } from './actions';
import messages from './messages';
import selectEditUser from './selectors';

import { CARD_STYLE } from '../../styles';
import UserMembership from '../UserMembership';
import UserForm from '../UserForm';

export class EditUser extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    params: React.PropTypes.shape({
      username: React.PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getUser(this.props.params.username));
  }

  onSubmit() {
    this.props.dispatch(editUser());
  }

  render() {
    return (
      <Card style={CARD_STYLE}>
        <UserForm
          header={<CardTitle title={<FormattedMessage {...messages.header} />} />}
          button={<FormattedMessage {...messages.save} />}
          onSubmit={this.onSubmit}
        />
        <Divider style={{ marginTop: '30px', marginBottom: '10px' }} />
        <UserMembership
          header={<CardTitle title={<FormattedMessage {...messages.membershipHeader} />} />}
          user={this.props.params.username}
        />
      </Card>
    );
  }
}

const mapStateToProps = selectEditUser();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
