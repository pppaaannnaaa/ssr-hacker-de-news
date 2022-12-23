import { connect } from 'react-redux';
import { baseAction, fetchHackerNews, updateUserData } from '../../actions';
import Home from './Home';

const loadData = ({ store, pageNumber, userData }) => {
  return store.dispatch(fetchHackerNews({ pageNumber, userData }));
};

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};

const mapDispatchToProps = (dispatch) => ({
  baseAction: (action, payload) => dispatch(baseAction(action, payload)),
  fetchHackerNews: (payload) => dispatch(fetchHackerNews(payload)),
  updateUserData: (payload) => dispatch(updateUserData(payload)),
  dispatch,
});

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(Home),
  loadData,
};
