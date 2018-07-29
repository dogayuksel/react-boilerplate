const path = require('path');
const express = require('express');
const chalk = require('chalk');

const app = express();

app.use('/dist/main.js', (req, res) => {
  const absolutePath = path.resolve('./dist/main.js');
  res.status(200).sendFile(absolutePath);
});

app.use('/', (req, res) => {
  const absolutePath = path.resolve('./index.html');
  res.status(200).sendFile(absolutePath);
});

app.listen(3000);
console.log(chalk.green('Server started at port 3000'));
