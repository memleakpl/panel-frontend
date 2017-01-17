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
import CircularProgress from 'material-ui/CircularProgress';
import selectEditUser from './selectors';
import { getUser, editUser } from './actions';
import messages from './messages';

import { CARD_STYLE } from '../../styles';
import UserMembership from '../UserMembership';
import UserForm from '../UserForm';

export class EditUser extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    getError: React.PropTypes.bool,
    getLoading: React.PropTypes.bool,
    editLoading: React.PropTypes.bool,
    params: React.PropTypes.shape({
      username: React.PropTypes.string.isRequired,
    }).isRequired,
  }
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
    const error = this.props.getError ?
      (<div>
        <CardTitle style={{ textAlign: 'left' }} title={<FormattedMessage {...messages.membershipHeader} />} />
        <FormattedMessage {...messages.getUserErrorMessage} values={{ userName: this.props.params.username }} />
      </div>) :
      undefined;
    const loading = this.props.getLoading ? <CircularProgress style={{ margin: '30px' }} /> : undefined;
    const form = (!this.props.getLoading && !this.props.getError) ?
      (<div>
        <UserForm
          header={<CardTitle style={{ textAlign: 'left' }} title={<FormattedMessage {...messages.header} />} />}
          button={<FormattedMessage {...messages.save} />}
          loading={this.props.editLoading}
          disableUsername
          onSubmit={this.onSubmit}
        />
        <Divider style={{ marginTop: '30px', marginBottom: '10px' }} />
        <UserMembership
          header={<CardTitle title={<FormattedMessage {...messages.membershipHeader} />} />}
          user={this.props.params.username}
        />
      </div>) :
      undefined;
    return (
      <Card style={CARD_STYLE}>
        <div style={{ textAlign: 'center' }}>
          {error}
          {loading}
          {form}
        </div>
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
