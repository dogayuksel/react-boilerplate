// @flow
import path from 'path';
import chalk from 'chalk';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactApp from '../shared';
import template from './template';

const app = express();

app.get('/bundle.js', (req, res) => {
  const bundlePath = path.resolve('dist/bundlePath.js');
  res.status(200).sendFile(bundlePath);
});

app.use('/', (req, res) => {
  const renderedApp = ReactDOMServer.renderToString(<ReactApp />);
  res.status(200).send(template({
    title: 'React Boilerplate',
    body: renderedApp,
  }));
});

app.listen(3000);
console.log(chalk.green('Server started at port 3000'));
