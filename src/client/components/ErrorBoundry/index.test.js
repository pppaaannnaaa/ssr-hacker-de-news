import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorBoundary from './index';

describe('<ErrorBoundary />', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  afterEach(cleanup);

  test('Renders <ErrorBoundary /> component correctly', () => {
    const { container, getByText } = render(<ErrorBoundary>Children</ErrorBoundary>);
    expect(container).toMatchSnapshot();
    expect(getByText('Children')).toBeInTheDocument();
  });
});
