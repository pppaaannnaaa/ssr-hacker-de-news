import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotFound from './index';

describe('<NotFound />', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  afterEach(cleanup);

  test('Renders <NotFound /> component correctly', async () => {
    // eslint-disable-next-line react/jsx-pascal-case
    const { container } = render(<NotFound.component />);
    expect(container).toMatchSnapshot();
  });
});
