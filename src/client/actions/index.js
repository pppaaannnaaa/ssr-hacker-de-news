import axios from 'axios';
import { types, API_URL, constant } from '../constant';
import { getDomain, getFilterNewsList, getLineChartData, getUpdatedUpVoteList } from '../utils';

export const baseAction = (action, payload = {}) => ({
  type: action,
  payload,
});

const errorHandel = () => {
  return {
    type: types.RECEIVE_ERROR,
  };
};

export const updateUserData = ({ newsList, newUserData, hide, objectID, points }) => async (
  dispatch
) => {
  dispatch(baseAction(types.IS_LOADING, true));

  const data = {
    newsList,
    objectID,
    points,
    isLineChart: false,
    userData: newUserData,
  };

  const payload = {
    newsList: hide ? getFilterNewsList(data) : getUpdatedUpVoteList({ ...data }),
    lineChart: hide ? getLineChartData(data) : getUpdatedUpVoteList({ ...data, isLineChart: true }),
    userData: newUserData,
  };

  dispatch(baseAction(types.USER_LIST, payload));
  dispatch(baseAction(types.IS_LOADING, false));
};

const getFormattedObjectList = (newsList) => {
  return (
    newsList &&
    newsList.length &&
    newsList.map((news) => {
      return {
        objectID: news.objectID || 'N/A',
        num_comments: news.num_comments || 0,
        points: news.points || 0,
        title: news.title || 'N/A',
        url: getDomain(news.url) || 'N/A',
        author: news.author || 'N/A',
        created_at: new Date(news.created_at) || 'N/A',
      };
    })
  );
};

export const fetchHackerNews = ({ pageNumber = 0, userData = {} }) => async (dispatch) => {
  const hitsPerPage = constant.MAX_PAGE_SIZE;
  const url = `${API_URL.HN_ALGOLIA}?page=${pageNumber}&hitsPerPage=${hitsPerPage}`;

  dispatch(baseAction(types.IS_LOADING, true));

  await axios
    .get(url)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Something went wrong!!');
      }

      const { hits = [], page = 0 } = response.data;
      const newsList = getFormattedObjectList(hits);

      const payloadData = { newsList, userData };
      const payload = {
        pageNumber: page,
        userData,
        newsList: getFilterNewsList(payloadData),
        lineChart: getLineChartData(payloadData),
      };

      dispatch(baseAction(types.FETCH_HACKER_NEWS, payload));
      dispatch(baseAction(types.IS_LOADING, false));
    })
    .catch((err) => {
      dispatch(errorHandel());
      dispatch(baseAction(types.IS_LOADING, false));
    });
};

export default null;
