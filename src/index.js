import '@babel/polyfill';
import express from 'express';
import Cookies from 'universal-cookie';
import { matchRoutes } from 'react-router-config';
import compression from 'compression';
import createStore from './client/store/createStore';
import Routes from './client/Routes';
import renderer from './tools/renderer';

const app = express();

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) return false;
  return compression.filter(req, res);
}

// test
app.use(
  compression({
    level: 2, // set compression level from 1 to 9 (6 by default)
    filter: shouldCompress, // set predicate to determine whether to compress
  })
);

const port = process.env.PORT || 3000;

// To be able to serve static files
app.use(express.static('public'));
app.use(express.static('assets'));

app.get('*', (req, res) => {
  const params = req.params[0].split('/');
  const id = params[2];

  const clientCookis = new Cookies(req.headers.cookie);
  const userData = clientCookis.cookies.userData ? JSON.parse(clientCookis.cookies.userData) : {};

  // We create store before rendering html
  const store = createStore();
  // We pass store to renderer

  // Checks the given path, matches with component and returns array of items about to be rendered
  const routes = matchRoutes(Routes, req.path);

  // Execute all loadData functions inside given urls and wrap promises with new promises to be able to render pages all the time
  // Even if we get an error while loading data, we will still attempt to render page.
  const promises = routes
    .map(({ route }) => {
      return route.loadData ? route.loadData({ store, pageNumber: id, userData }) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
      return null;
    });

  // Wait for all the loadData functions, if they are resolved, send the rendered html to browser.
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port: ${port}`);
});
