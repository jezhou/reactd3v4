import React, { Component } from 'react';
import Preloader from './components/Preloader';
import './App.css';

import * as d3 from 'd3';
import _ from 'lodash';
import { loadAllData } from './Datahandling';

class App extends Component {
  state = {
    techSalaries: [],
    countyNames: [],
    medianIncomes: []
  }

  componentWillMount() {
    loadAllData(data => this.setState(data));
  }
  render() {
    if (this.state.techSalaries.length < 1) {
      return <Preloader/>;
    }
    return (
      <div className="App container">
        <h1>Loaded {this.state.techSalaries.length}</h1>
      </div>
    );
  }
}

export default App;
