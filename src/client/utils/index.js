import Cookies from 'universal-cookie';

export const getUserData = () => {
  const cookies = new Cookies();
  let userData;

  userData = cookies.get('userData');
  userData = userData || {};

  return userData;
};

export const setUserData = (newUserData) => {
  const cookies = new Cookies();
  const allUserData = getUserData();

  const userData = {
    ...allUserData,
    ...newUserData,
  };

  cookies.set('userData', JSON.stringify(userData), { path: '/' });
};

// export const getUserData = () => {
//   let userData = {};

//   if (typeof window !== 'undefined') {
//     if (localStorage.getItem('userData') !== null) {
//       userData = JSON.parse(localStorage.userData);
//     }
//   }

//   return userData;
// };

// export const setUserData = (newUserData) => {
//   if (typeof window !== 'undefined') {
//     const allUserData = getUserData();
//     const userData = {
//       ...allUserData,
//       ...newUserData,
//     };

//     localStorage.setItem('userData', JSON.stringify(userData));
//   }
// };

export const getDomain = (url) => {
  // eslint-disable-next-line no-param-reassign
  url = url ? url.replace(/(https?:\/\/)?(www.)?/i, '') : url;

  if (url && url.indexOf('/') !== -1) {
    return url.split('/')[0];
  }

  return url;
};

export const getFilterNewsList = ({ newsList, userData }) => {
  let filterdList = [];
  filterdList =
    newsList &&
    newsList.length &&
    newsList
      .filter((news) => {
        return !(userData[news.objectID] && userData[news.objectID].hide);
      })
      .map((news) => {
        const newNews = news;
        if (userData[news.objectID] && userData[news.objectID].points) {
          newNews.points = userData[news.objectID].points;
        }

        return newNews;
      });

  return filterdList;
};

export const getLineChartData = ({ newsList, userData }) => {
  const filterNewsList = getFilterNewsList({ newsList, userData });
  let filteredLineChartList = [];

  filteredLineChartList =
    filterNewsList &&
    filterNewsList.length &&
    filterNewsList.map((news) => {
      return [news.objectID, news.points];
    });

  return filteredLineChartList;
};

export const getUpdatedUpVoteList = ({ newsList, objectID, points, isLineChart }) => {
  return newsList && newsList.length
    ? newsList.map((news) => {
        const newNews = news;
        if (newNews.objectID === objectID) {
          newNews.points = points;
        }

        return isLineChart ? [newNews.objectID, newNews.points] : newNews;
      })
    : [];
};
