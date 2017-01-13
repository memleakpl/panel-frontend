/*
 *
 * CreateUser
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createUser } from './actions';
import UserForm from '../UserForm';
import messages from './messages';

export class CreateUser extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: React.PropTypes.func,
  };
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    this.props.dispatch(createUser());
  }
  render() {
    return (
      <UserForm
        header={<FormattedMessage {...messages.header} />}
        button={<FormattedMessage {...messages.create} />}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = () => ({});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
