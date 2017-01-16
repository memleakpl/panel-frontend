/*
 *
 * CreateGroup
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'material-ui/Card';
import { createGroup } from './actions';
import messages from './messages';
import selectCreateGroup from './selectors';

import GroupForm from '../GroupForm';
import { CARD_STYLE } from '../../styles';

export class CreateGroup extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    loading: React.PropTypes.bool,
    dispatch: React.PropTypes.func,
  };

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.dispatch(createGroup());
  }

  render() {
    return (
      <Card style={CARD_STYLE}>
        <GroupForm
          button={<FormattedMessage {...messages.create} />}
          header={<CardTitle title={<FormattedMessage {...messages.header} />} />}
          loading={this.props.loading}
          onSubmit={this.onSubmit}
        />
      </Card>
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
