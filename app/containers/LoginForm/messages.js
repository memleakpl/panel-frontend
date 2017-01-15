/*
 * LoginForm Messages
 *
 * This contains all the text for the LoginForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.LoginForm.header',
    defaultMessage: 'Login',
  },
  username: {
    id: 'app.containers.LoginForm.username',
    defaultMessage: 'Username',
  },
  usernameHint: {
    id: 'app.containers.LoginForm.usernameHint',
    defaultMessage: 'John',
  },
  password: {
    id: 'app.containers.LoginForm.password',
    defaultMessage: 'Password',
  },
  error: {
    id: 'app.containers.LoginForm.error',
    defaultMessage: 'Wrong username or password!',
  },
  login: {
    id: 'app.containers.LoginForm.login',
    defaultMessage: 'Login',
  },
  resetPassword: {
    id: 'app.containers.LoginForm.resetPassword',
    defaultMessage: 'Reset password',
  },
});
