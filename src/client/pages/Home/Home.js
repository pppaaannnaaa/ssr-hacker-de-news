import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { setUserData, getUserData } from '../../utils';
import Head from '../../components/Head';
import LoaderOverlay from '../../components/LoaderOverlay';
import InvalidPage from '../../components/InvalidPage';
import TableList from '../../components/TableList';
import LineChart from '../../components/LineChart';
import Pagination from '../../components/Pagination';

const Home = (props) => {
  const {
    fetchHackerNews,
    updateUserData,
    home: { newsList, lineChart, pageNumber, isLoading },
  } = props;

  const pageID = parseInt(useParams().id || 0, 10);
  const [page404, setPage404] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pageID < 0 || isNaN(pageID)) {
      setPage404(true);
    } else if (pageID !== pageNumber) {
      fetchHackerNews({ pageNumber: pageID, userData: getUserData() });
    }
  }, [fetchHackerNews, pageID, pageNumber]);

  const onClickNewsList = ({ objectID, hide, points }) => {
    const newUserData = {
      [objectID]: {
        hide,
        points,
      },
    };

    setUserData(newUserData);
    updateUserData({ newsList, newUserData, hide, objectID, points });
  };

  if (page404) {
    return <InvalidPage />;
  }

  return (
    <div role="main" aria-label="Home Page">
      <Head />
      <div className="row">
        <div className="section">
          {isLoading ? (
            <LoaderOverlay />
          ) : (
            <>
              <TableList
                isLoading={isLoading}
                newsList={newsList}
                onClickNewsList={onClickNewsList}
              />
              <Pagination pageNumber={pageNumber} isLoading={isLoading} />
              {lineChart && lineChart.length ? <LineChart data={lineChart} /> : ''}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  home: PropTypes.shape({
    newsList: PropTypes.arrayOf(
      PropTypes.shape({
        objectID: PropTypes.string,
        num_comments: PropTypes.number,
        points: PropTypes.number,
        title: PropTypes.string,
        url: PropTypes.string,
        author: PropTypes.string,
        created_at: PropTypes.date,
      })
    ),
    // eslint-disable-next-line react/forbid-prop-types
    lineChart: PropTypes.arrayOf(PropTypes.any),
    pageNumber: PropTypes.number,
    isLoading: PropTypes.bool,
  }),
  fetchHackerNews: PropTypes.func,
  updateUserData: PropTypes.func,
};

Home.defaultProps = {
  home: {
    newsList: [],
    lineChart: [],
    pageNumber: 0,
    isLoading: false,
  },
  fetchHackerNews: null,
  updateUserData: null,
};

export default Home;
