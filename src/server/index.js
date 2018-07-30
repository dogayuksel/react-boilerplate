import path from 'path';
import chalk from 'chalk';
import express from 'express';
import React from 'react';
import ReactDOMServer, { renderToString } from 'react-dom/server';
import ReactApp from '../shared';
import template from './template';

const app = express();

app.get('/bundle.js', (req, res) => {
  const bundle = path.resolve('dist/bundle.js');
  res.status(200).sendFile(bundle);
});

app.use('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<ReactApp />);
  res.status(200).send(template({
    title: 'React Boilerplate',
    body: app,
  }));
});

app.listen(3000);
console.log(chalk.green('Server started at port 3000'));
