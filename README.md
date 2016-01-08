# generator-phoenix-react [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A generator to create a phoenix application using React as view

## Installation
First, install [Yeoman](http://yeoman.io) and generator-phoenix-react using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-phoenix-react
```

Then generate your new project:

```bash
yo phoenix-react <my-project-name>
```

## Running tests

```bash
npm test
# or
npm run-script test:watch # for TDD
```

## Create a test
1. Create a new file `test/static/js/<component-name>.spec.js`
2. Import React
3. run `npm test`

## Test example

```javascript
// test/static/js/app.spec.js
import React from 'react';
import {expect} from 'chai';
/**
* <my-project> is replaced by your project name which can be found under "resolve.alias" in
* webpack.config.js in the root of this project
*/
import App from '<my_project>/components/app';
import {render} from 'test_helpers';


describe('App', () => {
  it ('renders html', () => {
    let output = render(<App />);
    expect(output.props.children).to.have.length.above(0);
  });
});
```

## Test specs
Frameworks:
- [Karma](http://karma-runner.github.io/0.13/index.html)
- [Mocha](https://mochajs.org/)
- [Chai](http://chaijs.com/)

## Getting To Know Yeoman
Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## License
MIT © [Thomas Farla](http://farla.io)

[npm-image]: https://badge.fury.io/js/generator-phoenix-react.svg
[npm-url]: https://npmjs.org/package/generator-phoenix-react
[travis-image]: https://travis-ci.org/TFarla/generator-phoenix-react.svg?branch=master
[travis-url]: https://travis-ci.org/TFarla/generator-phoenix-react
[daviddm-image]: https://david-dm.org/TFarla/generator-phoenix-react.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/TFarla/generator-phoenix-react
[coveralls-image]: https://coveralls.io/repos/TFarla/generator-phoenix-react/badge.svg
[coveralls-url]: https://coveralls.io/r/TFarla/generator-phoenix-react
