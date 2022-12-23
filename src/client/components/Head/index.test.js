import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Head from './index';

describe('<Head />', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  afterEach(cleanup);

  test('Renders <Head /> component correctly', () => {
    const { container } = render(<Head />);
    expect(container).toMatchSnapshot();
  });
});
