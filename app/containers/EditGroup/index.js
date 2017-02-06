/*
 *
 * EditGroup
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Card, CardTitle } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import selectEditGroup from './selectors';
import messages from './messages';
import GroupForm from '../GroupForm';
import { getGroup, editGroup } from './actions';
import { CARD_STYLE } from '../../styles';

export class EditGroup extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes= {
    editLoading: React.PropTypes.bool,
    getError: React.PropTypes.bool,
    getLoading: React.PropTypes.bool,
    dispatch: React.PropTypes.func,
    params: React.PropTypes.shape({
      groupname: React.PropTypes.string.isRequired,
    }).isRequired,
  };
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(getGroup(this.props.params.groupname));
  }
  onSubmit() {
    this.props.dispatch(editGroup());
  }
  render() {
    const error = this.props.getError ?
      (<div>
        <CardTitle style={{ textAlign: 'left' }} title={<FormattedMessage {...messages.header} />} />
        <FormattedMessage {...messages.getGroupErrorMessage} values={{ groupName: this.props.params.groupname }} />
      </div>) :
      undefined;
    const loading = this.props.getLoading ? <CircularProgress style={{ margin: '30px' }} /> : undefined;
    const form = (!this.props.getLoading && !this.props.getError) ?
      (<GroupForm
        disabledName
        button={<FormattedMessage {...messages.save} />}
        header={<CardTitle style={{ textAlign: 'left' }} title={<FormattedMessage {...messages.header} />} />}
        loading={this.props.editLoading}
        onSubmit={this.onSubmit}
      />) :
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

const mapStateToProps = selectEditGroup();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditGroup);
