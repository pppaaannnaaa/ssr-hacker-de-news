import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './index';

describe('<Footer />', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  afterEach(cleanup);

  test('Renders <Footer /> component correctly', () => {
    const { container, getByText } = render(<Footer />);
    expect(container).toMatchSnapshot();
    expect(getByText('© 2020 SSR News de Hacker')).toBeInTheDocument();
  });
});
