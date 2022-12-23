import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LineChart from './index';

describe('<LineChart />', () => {
  let props;

  beforeEach(() => {
    props = {
      loaderNode: <div />,
      options: {
        title: 'News de Hacker Line Chart',
        hAxis: {
          title: 'ID',
        },
        vAxis: {
          title: 'Votes',
        },
      },
      lineChart: [
        ['x', 'Vote'],
        [1, 2],
        [2, 4],
        [3, 6],
        [4, 8],
      ],
    };
  });

  afterEach(cleanup);

  test('Renders <LineChart /> component correctly', async () => {
    const { container } = render(
      <LineChart loader={props.loaderNode} data={props.lineChart} options={props.options} />
    );
    expect(container).toMatchSnapshot();
  });
});
