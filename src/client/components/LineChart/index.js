import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';

const LineChart = (props) => {
  const { data } = props;
  const lineChart = [['x', 'Vote'], ...data];
  const options = {
    title: 'News de Hacker Line Chart',
    hAxis: {
      title: 'ID',
    },
    vAxis: {
      title: 'Votes',
    },
  };
  const loaderNode = (
    <div style={{ padding: '200px 20%' }}>
      <div className="progress">
        <div className="indeterminate" />
      </div>
    </div>
  );

  return (
    <div role="form" aria-label="Line Chart">
      <Chart
        width="100%"
        height="500px"
        chartType="LineChart"
        loader={loaderNode}
        data={lineChart}
        options={options}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
};

LineChart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.arrayOf(PropTypes.any),
};

LineChart.defaultProps = {
  data: [],
};

export default LineChart;
