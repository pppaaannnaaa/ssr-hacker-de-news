import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...Home,
        path: '/page/:id',
        exact: true,
      },
      {
        ...NotFound,
      },
    ],
  },
];
