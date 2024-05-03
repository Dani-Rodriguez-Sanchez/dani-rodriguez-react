import React, { Component } from 'react';
import moment from 'moment';

import PortfolioContainer from './portfolio/portfolio-container'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Dani Rodriguez portfolio</h1>
        <PortfolioContainer />
        <div>
          {moment().format('MMMM Do YYYY, hh:mm:ss a')}
        </div>
      </div>
    );
  }
}
