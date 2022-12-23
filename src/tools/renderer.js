import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();
  return `<!DOCTYPE html> <html lang="en">
              <head>
                  ${helmet.title.toString()}
                  ${helmet.meta.toString()}
                  ${helmet.link.toString()}
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                  <meta name="theme-color" content="#000000" />
                  <meta name="description" content="Modern PWA News de Hacker React Application" />
                  <link href="/favicon.ico" rel="shortcut icon">
                  <link rel="icon" type="image/png" href="/logo.png" />
                  <link rel="apple-touch-icon" href="/logo.png" />
                  <link rel="manifest" href="/manifest.json" />
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
              </head>
              <body>
                  <div id="root">${content}</div>
                  <script>
                      window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(
                        /</g,
                        '\\u003c'
                      )}

                      if ('serviceWorker' in navigator) {
                        window.addEventListener('load', () => {
                          navigator.serviceWorker
                            .register('/serviceWorker.js')
                            .then((reg) => console.log('Success', reg.scope))
                            .catch((err) => console.log('Failure', err));
                        });
                      }
                      
                      if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
                        window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {};
                      }
                  </script>
                  <script src="/bundle.js"></script>
                  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
              </body>
      </html>`;
};
