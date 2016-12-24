/**
 * Created by oszust on 18.12.16.
 */
import { blue100, blueGrey50, white, brown100 } from 'material-ui/styles/colors';

export const activeLinkStyle = {
  display: 'block',
  backgroundColor: blue100,
};
export const mainDivStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  padding: '20px auto',
  minHeight: '100vh',
  backgroundColor: blueGrey50,
};
export const listItemStyle = {
  WebkitAppearance: 'none', // workaround of bug: https://github.com/callemall/material-ui/issues/4008
  margin: '0px',
};
export const linkStyle = {
  textDecoration: 'none',
};
export const listStyle = {
  flex: 0.13,
  position: 'sticky',
  boxShadow: `5px 5px 8px ${brown100}`,
  backgroundColor: white,
};
export const childrenDivStyle = {
  flex: 0.87,
};

