/**
 * Created by oszust on 25.12.16.
 */

import React from 'react';

export const GROUP_TYPE = React.PropTypes.shape({
  name: React.PropTypes.string.isRequired,
  owner: React.PropTypes.string,
  description: React.PropTypes.string,
});
