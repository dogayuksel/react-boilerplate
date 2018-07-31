// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import App from '../shared';

const hydrate = () => {
  const element = document.getElementById('root');
  if (element === null) {
    throw Error('Expected to find DOM Element with id=root');
  }
  return ReactDOM.hydrate(<App />, element);
};

hydrate();
