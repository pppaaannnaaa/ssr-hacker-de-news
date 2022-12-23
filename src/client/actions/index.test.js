import { types } from '../constant';
import { baseAction } from './index';

jest.mock('axios');
jest.mock('../utils', () => ({
  getUserData: jest.fn(),
  getFilterNewsList: jest.fn(),
  getLineChartData: jest.fn(),
  getUpdatedUpVoteList: jest.fn(),
}));

describe('actions', () => {
  it('should call baseAction', () => {
    expect(baseAction(types.IS_LOADING, true)).toEqual({
      type: types.IS_LOADING,
      payload: true,
    });
  });
});
