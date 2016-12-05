/**
 * Created by Kamil on 26.11.2016.
 */

import React from 'react';

export const USER_TYPE = React.PropTypes.shape({
  username: React.PropTypes.string.isRequired,
  fullName: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
});
