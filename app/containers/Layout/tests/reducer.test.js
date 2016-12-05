import expect from 'expect';
import layoutReducer from '../reducer';
import { fromJS } from 'immutable';

describe('layoutReducer', () => {
  it('returns the initial state', () => {
    expect(layoutReducer(undefined, {})).toEqual(fromJS({}));
  });
});
