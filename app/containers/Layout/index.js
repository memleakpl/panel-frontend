/*
 *
 * Layout
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';

import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import ActionList from 'material-ui/svg-icons/action/list';
import ActionLockOutline from 'material-ui/svg-icons/action/lock-outline';
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { logout } from './actions';
import { USERS_LIST_URL } from '../UsersList/constants';
import { CREATE_USER_URL } from '../CreateUser/constants';
import { CHANGE_PASSWORD_URL } from '../ChangePasswordForm/constants';
import { activeLinkStyle, mainDivStyle, listItemStyle, linkStyle, listStyle, childrenDivStyle } from './styles';


export class Layout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: React.PropTypes.func,
    children: React.PropTypes.node,
  };
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }
  logout() {
    this.props.dispatch(logout());
  }
  render() {
    return (
      <div style={mainDivStyle}>
        <List style={listStyle}>
          <Link to={USERS_LIST_URL} style={linkStyle} activeStyle={activeLinkStyle}>
            <ListItem
              style={listItemStyle}
              primaryText={<FormattedMessage {...messages.users} />}
              rightIcon={<ActionList />}
            />
          </Link>
          <Link to={CREATE_USER_URL} style={linkStyle} activeStyle={activeLinkStyle}>
            <ListItem
              style={listItemStyle}
              primaryText={<FormattedMessage {...messages.addUser} />}
              rightIcon={<ContentAddCircleOutline />}
            />
          </Link>
          <ListItem
            style={listItemStyle}
            primaryText={<FormattedMessage {...messages.groups} />}
            rightIcon={<ActionList />}
          />
          <Link to="/group/create" style={linkStyle} activeStype={activeLinkStyle}>
            <ListItem
              style={listItemStyle}
              primaryText={<FormattedMessage {...messages.addGroup} />}
              rightIcon={<ContentAddCircleOutline />}
            />
          </Link>
          <Link to={CHANGE_PASSWORD_URL} style={linkStyle} activeStyle={activeLinkStyle}>
            <ListItem
              style={listItemStyle}
              primaryText={<FormattedMessage {...messages.changePassword} />}
              rightIcon={<ActionLockOutline />}
            />
          </Link>
          <Link style={linkStyle} onClick={this.logout}>
            <ListItem
              style={listItemStyle}
              primaryText={<FormattedMessage {...messages.logout} />}
              rightIcon={<ActionExitToApp />}
            />
          </Link>
        </List>
        <div style={childrenDivStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(_state) { // eslint-disable-line no-unused-vars
  return {};
}

function mapDispatchToProps(dispatch) { // eslint-disable-line no-unused-vars
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
