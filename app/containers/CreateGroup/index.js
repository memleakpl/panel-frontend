/*
 *
 * CreateGroup
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import selectCreateGroup from './selectors';
import messages from './messages';
import { requestCreateGroup } from './actions';

import GroupForm from '../GroupForm';

export class CreateGroup extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.dispatch(requestCreateGroup());
  }

  render() {
    return (
      <GroupForm
        header={<FormattedMessage {...messages.header} />}
        button={<FormattedMessage {...messages.create} />}
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
