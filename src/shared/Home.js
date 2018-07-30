import React, { Component } from 'react';

class HomePage extends Component {
  componentDidMount() {
    console.log('alive on DOM!');
  }

  render() {
    return(
      <div>React Boilerplate</div>
    );
  }
}

export default HomePage;
