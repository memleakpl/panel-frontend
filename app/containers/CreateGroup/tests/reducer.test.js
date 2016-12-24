import expect from 'expect';
import createGroupReducer from '../reducer';
import { fromJS } from 'immutable';

describe('createGroupReducer', () => {
  it('returns the initial state', () => {
    expect(createGroupReducer(undefined, {})).toEqual(fromJS({}));
  });
});
