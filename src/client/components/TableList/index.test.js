import React from 'react';
import { render, cleanup, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableList from './index';

describe('<TableList />', () => {
  let props;

  beforeEach(() => {
    props = {
      newsList: [
        {
          objectID: '12345',
          num_comments: 10,
          points: 100,
          title: 'Test',
          url: 'https://www.google.com/search?q=tests',
          author: 'Test',
          created_at: new Date('Thu Jul 30 2020 23:41:03'),
        },
      ],
      isLoading: false,
      onClickNewsList: jest.fn(),
    };
  });

  afterEach(cleanup);

  test('Renders <TableList /> component correctly', async () => {
    const { getByText } = render(
      <TableList
        newsList={props.newsList}
        isLoading={props.isLoading}
        onClickNewsList={props.onClickNewsList}
      />
    );

    const upVoteButton = await waitFor(() => getByText('arrow_drop_up'));
    const hideButton = await waitFor(() => getByText('hide'));
    // expect(container).toMatchSnapshot();
    fireEvent.click(upVoteButton);
    fireEvent.click(hideButton);
  });
});
