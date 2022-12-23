import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('<App />', () => {
  let props;

  beforeEach(() => {
    props = {
      route: {
        routes: [
          {
            ...App,
            path: '/',
            exact: true,
          },
        ],
      },
    };
  });

  afterEach(cleanup);

  test('Renders <App /> component correctly', () => {
    const { container, getByText } = render(<App.component {...props} />);
    expect(container).toMatchSnapshot();
    expect(getByText('News de Hacker')).toBeInTheDocument();
  });
});
