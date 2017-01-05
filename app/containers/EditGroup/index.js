/*
 *
 * EditGroup
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import selectEditGroup from './selectors';
import messages from './messages';
import { GroupForm } from '../GroupForm';
import { getGroup, editGroup } from './actions';

export class EditGroup extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes= {
    loading: React.PropTypes.bool,
    dispatch: React.PropTypes.func,
    params: React.PropTypes.shape({
      groupname: React.PropTypes.string.isRequired,
    }).isRequired,
  }
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    console.log(this.props.params.groupname);
    this.props.dispatch(getGroup(this.props.params.groupname));
  }
  onSubmit() {
    this.props.dispatch(editGroup());
  }
  render() {
    return (
      <GroupForm
        button={<FormattedMessage {...messages.save} />}
        loading={this.props.loading}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = selectEditGroup();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditGroup);
