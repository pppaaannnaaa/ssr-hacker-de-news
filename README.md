# News de Hacker SSR

React Server Side Rendering demo project. This project uses [News de Hacker API](https://hn.algolia.com/api) under the hood.

Demo: [Click to see DEMO](https://ssr_news_portal_hacker.herokuapp.com/)

## Getting Started

This project created for Sapient assingment to meetup following details:

- Server Side Rendering (Stacks: React JS, Redux, HTML, CSS, Javascript, Node JS, Experss)
- Local Storage to save User Data when page refresh
- Use react-google-charts for LineChart
- Responsive Design for All Devices
- Writing Unite Test cases (Stack: React Testing Library)
- Implementation of Performance, SEO and Accessibility
- PWA Implementation
- Live API [News de Hacker API](https://hn.algolia.com/api)
- Using all Best Practices of Front End Application
- Create Github Repository [GITHUB](https://github.com/pppaaannnaaa/ssr_news_portal_hacker)
- Setup CI pipeline with Travis CI
- Deployment with Heroku provider

### Installing

First clone project and install dependencies

```sh
$ mkdir react-hacker-news && cd react-hacker-news
$ git clone https://github.com/pppaaannnaaa/ssr_news_portal_hacker.git
$ cd ssr_news_portal_hacker
$ yarn
```

Run on local

```sh
$ yarn run dev
```

Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

Deployment build

```sh
$ yarn run build:prod
```

You can deploy this project to [Heroku](https://www.heroku.com/):

```sh
$ yarn run heroku-postbuild
```

## Testing Unite test cases

Deployment build

```sh
$ yarn run test
```

## Travis CI config

```sh
sudo: false
language: node_js
node_js:
- 14.5.0
install:
- yarn
script:
- yarn test
notifications:
  email: false
deploy:
  provider: heroku
  api_key:
    secure: HEROKU_KEY
  app: ssr_news_portal_hacker2
  on:
    repo: pppaaannnaaa/ssr_news_portal_hacker

```

## File Structure

- assets
  - logo.png
  - manifest.json
  - offline.html
  - serviceWorker.js
- src
  - client
    - actions
      - index.js
    - components
      - ErrorBoundary
        - index.js
      - Footer
        - index.js
      - Head
        - index.js
      - Header
        - index.js
      - LineChart
        - index.js
      - Pagination
        - index.js
      - TableList
        - index.js
    - pages
      - Home
        - Home.js
        - index.js
      - NotFound
        - index.js
    - reducers
      - homeReducers.js
      - index.js
    - store
      - createStore.js
    - utils
      - index.js
      - style.js
    - App.js
    - client.js
    - contanst.js
    - Routes.js
  - tools
    - renderer.js
- package.json
- README.md
- webpack.base.js
- webpack.client.js
- webpack.client.prod.js
- webpack.server.js

## Approach to Developed Application

- Analysis Application's scope
- Setup Webpack for Client and Server both with development and production
- Implemented Server Side rendering
- Implemented Application features
- Developed Responsive layout
- Setup React Testing Library
- Added Unite test cases
- Optimized Performance, SEO and Accessibility
- Implemened PWA
- Pushed all the changes in [Github](https://github.com/pppaaannnaaa/ssr_news_portal_hacker)
- Setup CI with [Travis CI](https://travis-ci.com/github/pppaaannnaaa/ssr_news_portal_hacker)
- Setup CD with [Heroku](https://dashboard.heroku.com/apps/ssr_news_portal_hacker2)
- Finally Done! [Click to see DEMO](https://ssr_news_portal_hacker2.herokuapp.com/)
