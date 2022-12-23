import { types } from '../constant';

/**
 * @param {Object} state - previous state
 * @param {Object} action - action to handle
 * @returns {Object} - new state
 */
const initialState = {
  isLoading: false,
  pageNumber: 0,
  newsList: [],
  lineChart: [],
  userData: {},
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_HACKER_NEWS:
      return action.payload;

    case types.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case types.USER_LIST:
      return {
        ...state,
        newsList: action.payload.newsList,
        lineChart: action.payload.lineChart,
        userData: { ...state.userData, ...action.payload.userData },
      };

    default:
      return state;
  }
};

export default homeReducer;
