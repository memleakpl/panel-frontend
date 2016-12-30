/*
 *
 * GroupForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import selectGroupForm from './selectors';
import { setDescription, setName, setOwner } from './actions';

import GroupFormComponent from '../../components/GroupFormComponent';

export class GroupForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    button: React.PropTypes.element,
    header: React.PropTypes.element,
    loading: React.PropTypes.bool.isRequired,
    description: React.PropTypes.string,
    name: React.PropTypes.string,
    owner: React.PropTypes.string,
    dispatch: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
  };

  constructor() {
    super();
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onOwnerChange = this.onOwnerChange.bind(this);
  }

  onDescriptionChange(_e, description) {
    this.props.dispatch(setDescription(description));
  }

  onNameChange(_e, name) {
    this.props.dispatch(setName(name));
  }

  onOwnerChange(_e, owner) {
    this.props.dispatch(setOwner(owner));
  }

  render() {
    return (
      <GroupFormComponent
        button={this.props.button}
        header={this.props.header}
        loading={this.props.loading}
        description={this.props.description}
        name={this.props.name}
        owner={this.props.owner}
        onDescriptionChange={this.onDescriptionChange}
        onNameChange={this.onNameChange}
        onOwnerChange={this.onOwnerChange}
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
