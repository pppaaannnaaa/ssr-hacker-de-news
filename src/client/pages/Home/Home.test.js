import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    useParams: jest.fn(() => ({
      id: '1',
    })),
    useHistory: jest.fn(),
    Link: 'Link',
    Route: ({ children, path }) => children({ match: path === '/somewhere' }),
  };
});

describe('<Home />', () => {
  let props;

  beforeEach(() => {
    window.scrollTo = jest.fn();
    props = {
      match: {
        params: '2',
      },
      home: {
        newsList: [],
        lineChart: [],
        pageNumber: 0,
        isLoading: false,
      },
      fetchHackerNews: jest.fn(),
      updateUserData: jest.fn(),
    };
  });

  afterEach(cleanup);

  test('Renders <Home /> component correctly', async () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { container, getByText } = render(<Home {...props} />);
    expect(container).toMatchSnapshot();
    expect(getByText('No Data Found')).toBeTruthy();
  });

  test('Renders <Home /> component correctly', async () => {
    props = {
      ...props,
      home: {
        ...props.home,
        newsList: [
          {
            objectID: '12345',
            num_comments: 10,
            points: 100,
            title: 'Name',
            url: 'google.com',
            author: 'Author',
            created_at: new Date('Thu Jul 20 2020 23:41:03'),
          },
        ],
        lineChart: [
          ['x', 'Vote'],
          ['12345', 100],
        ],
      },
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { getByText } = render(<Home {...props} />);
    // expect(container).toMatchSnapshot();
    expect(getByText('10')).toBeTruthy();
    expect(getByText('100')).toBeTruthy();
    expect(getByText('Name')).toBeTruthy();
    expect(getByText('(google.com)')).toBeTruthy();
    expect(getByText('Author')).toBeTruthy();
    expect(getByText('hide')).toBeTruthy();
  });
});
