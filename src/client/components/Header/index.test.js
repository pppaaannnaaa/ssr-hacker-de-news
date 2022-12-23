import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './index';

describe('<Header />', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  afterEach(cleanup);

  test('Renders <Header /> component correctly', () => {
    const { container, getByText } = render(<Header />);
    expect(container).toMatchSnapshot();
    expect(getByText('News de Hacker')).toBeInTheDocument();
  });
});
