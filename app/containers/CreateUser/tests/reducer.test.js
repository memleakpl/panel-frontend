import expect from 'expect';
import createUserReducer from '../reducer';
import { fromJS } from 'immutable';

describe('createUserReducer', () => {
  it('returns the initial state', () => {
    expect(createUserReducer(undefined, {})).toEqual(fromJS({}));
  });
});
