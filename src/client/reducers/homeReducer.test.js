import { deepEqual, strictEqual } from 'assert';
import { types } from '../constant';
import homeReducer from './homeReducer';

describe('reducers/homeReducers', () => {
  const state = {
    isLoading: false,
    pageNumber: 0,
    newsList: [],
    lineChart: [],
    userData: {},
  };

  it('returns initial state by default', () => {
    strictEqual(
      homeReducer(state, {
        type: 'unknown type',
      }),
      state
    );
  });

  it('returns FETCH_HACKER_NEWS state', () => {
    deepEqual(
      homeReducer(state, {
        type: types.FETCH_HACKER_NEWS,
        payload: { test: 'test' },
      }),
      { test: 'test' }
    );
  });

  it('returns IS_LOADING state', () => {
    deepEqual(
      homeReducer(state, {
        type: types.IS_LOADING,
        payload: true,
      }),
      { ...state, isLoading: true }
    );
  });

  it('returns USER_LIST state', () => {
    deepEqual(
      homeReducer(state, {
        type: types.USER_LIST,
        payload: {
          newsList: [],
          lineChart: [],
          userData: {},
        },
      }),
      { ...state, newsList: [], lineChart: [], userData: {} }
    );
  });
});
