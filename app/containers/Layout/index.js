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
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { USERS_LIST_URL } from '../UsersList/constants';


export class Layout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: React.PropTypes.node,
  };
  render() {
    const listStyle = {
      WebkitAppearance: 'none', // workaround of bug: https://github.com/callemall/material-ui/issues/4008
      margin: '0px',
    };
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', padding: '20px auto', height: '100vh', backgroundColor: '#ECEFF1' }}>
        <List style={{ flex: 0.13, position: 'sticky', boxShadow: '5px 5px 8px #D7CCC8', backgroundColor: '#FFFFFF' }}>
          <Link to={USERS_LIST_URL} style={{ textDecoration: 'none' }} activeStyle={{ display: 'block', backgroundColor: '#BBDEFB' }}>
            <ListItem
              style={listStyle}
              primaryText={<FormattedMessage {...messages.users} />}
              rightIcon={<ActionList />}
            />
          </Link>
          <ListItem
            style={listStyle}
            primaryText={<FormattedMessage {...messages.addUser} />}
            rightIcon={<ContentAddCircleOutline />}
          />
          <ListItem
            style={listStyle}
            primaryText={<FormattedMessage {...messages.groups} />}
            rightIcon={<ActionList />}
          />
          <ListItem
            style={listStyle}
            primaryText={<FormattedMessage {...messages.addGroup} />}
            rightIcon={<ContentAddCircleOutline />}
          />
          <ListItem
            style={listStyle}
            primaryText={<FormattedMessage {...messages.logout} />}
            rightIcon={<ActionExitToApp />}
          />
        </List>
        <div style={{ flex: 0.8 }}>
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
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
