import expect from 'expect';
import usersListReducer from '../reducer';
import { fromJS } from 'immutable';

describe('usersListReducer', () => {
  it('returns the initial state', () => {
    expect(usersListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
