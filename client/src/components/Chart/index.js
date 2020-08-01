import React, { Component } from 'react';
import { render } from 'react-dom';
import Graph from './Chart';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       <Graph />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
