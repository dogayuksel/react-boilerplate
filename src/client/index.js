import React from 'react';
import ReactDOM from 'react-dom';

import App from '../shared';

const hydrate = () => {
  const element = document.getElementById('root');
  return ReactDOM.hydrate(<App />, element);
};

hydrate();
