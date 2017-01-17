/*
 *
 * CreateUser
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Card, CardTitle } from 'material-ui/Card';
import { createUser } from './actions';
import messages from './messages';
import { CARD_STYLE } from '../../styles';
import UserForm from '../UserForm';
import selectCreateUser from './selectors';

export class CreateUser extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: React.PropTypes.func,
    loading: React.PropTypes.bool,
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
      <Card style={CARD_STYLE}>
        <UserForm
          loading={this.props.loading}
          header={<CardTitle title={<FormattedMessage {...messages.header} />} />}
          button={<FormattedMessage {...messages.create} />}
          onSubmit={this.onSubmit}
        />
      </Card>
    );
  }
}

const mapStateToProps = selectCreateUser();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
