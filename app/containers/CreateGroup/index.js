/*
 *
 * CreateGroup
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { createGroupRequest } from './actions';
import messages from './messages';
import selectCreateGroup from './selectors';

import GroupForm from '../GroupForm';

export class CreateGroup extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    loading: React.PropTypes.bool,
    dispatch: React.PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.dispatch(createGroupRequest());
  }

  render() {
    return (
      <GroupForm
        button={<FormattedMessage {...messages.create} />}
        header={<FormattedMessage {...messages.header} />}
        loading={this.props.loading}
        dispatch={this.props.dispatch}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = selectCreateGroup();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroup);
