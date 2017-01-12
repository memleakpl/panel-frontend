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
import { logout, checkAdmin } from './actions';
import selectLayout from './selectors';
import { USERS_LIST_URL } from '../UsersList/constants';
import { CREATE_USER_URL } from '../CreateUser/constants';
import { CREATE_GROUP_URL } from '../CreateGroup/constants';
import { CHANGE_PASSWORD_URL } from '../ChangePasswordForm/constants';
import { GROUPS_LIST_URL } from '../GroupsList/constants';
import { activeLinkStyle, mainDivStyle, listItemStyle, linkStyle, listStyle, childrenDivStyle } from './styles';


export class Layout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: React.PropTypes.func,
    children: React.PropTypes.node,
    admin: React.PropTypes.bool,
  };
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(checkAdmin());
  }
  logout() {
    this.props.dispatch(logout());
  }
  render() {
    const adminLinks = [
      <Link to={USERS_LIST_URL} style={linkStyle} activeStyle={activeLinkStyle}>
        <ListItem
          style={listItemStyle}
          primaryText={<FormattedMessage {...messages.users} />}
          rightIcon={<ActionList />}
        />
      </Link>,
      <Link to={CREATE_USER_URL} style={linkStyle} activeStyle={activeLinkStyle}>
        <ListItem
          style={listItemStyle}
          primaryText={<FormattedMessage {...messages.addUser} />}
          rightIcon={<ContentAddCircleOutline />}
        />
      </Link>,
      <Link to={GROUPS_LIST_URL} style={linkStyle} activeStyle={activeLinkStyle}>
        <ListItem
          style={listItemStyle}
          primaryText={<FormattedMessage {...messages.groups} />}
          rightIcon={<ActionList />}
        />
      </Link>,
      <Link to={CREATE_GROUP_URL} style={linkStyle} activeStyle={activeLinkStyle}>
        <ListItem
          style={listItemStyle}
          primaryText={<FormattedMessage {...messages.addGroup} />}
          rightIcon={<ContentAddCircleOutline />}
        />
      </Link>,
    ];

    return (
      <div style={mainDivStyle}>
        <List style={listStyle}>
          { this.props.admin ? adminLinks : undefined }
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

const mapStateToProps = selectLayout();

function mapDispatchToProps(dispatch) { // eslint-disable-line no-unused-vars
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
