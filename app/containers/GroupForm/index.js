/*
 *
 * GroupForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import selectGroupForm from './selectors';
import { setDescription, setName } from './actions';

import CreateGroupForm from '../../components/CreateGroupForm';

export class GroupForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func,
  }

  constructor() {
    super();
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  onDescriptionChange(_e, description) {
    this.props.dispatch(setDescription(description));
  }

  onNameChange(_e, name) {
    this.props.dispatch(setName(name));
  }

  render() {
    return (
      <CreateGroupForm
        {...this.props}
        onDescriptionChange={this.onDescriptionChange}
        onNameChange={this.onNameChange}
        onSubmit={this.props.onSubmit}
      />
    );
  }
}

const mapStateToProps = selectGroupForm();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
