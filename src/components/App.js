import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';

import Hog from './Hog';
import FilterBtn from './FilterBtn';

class App extends Component {
  
  state = {
    hogs: hogs,
    showOnlyGreased: false,
  }
  
  createHog = () => {
    if(this.state.showOnlyGreased) {
      let filtered = this.state.hogs.filter(hog => hog.greased);
      return filtered.map(hog => <Hog hog={hog} />);
    }  else {
      return this.state.hogs.map(hog => <Hog hog={hog} />);
    }
  }

  handleToggleFilter = () => {
    this.setState({
      showOnlyGreased: !this.state.showOnlyGreased
    });
  }

  handleSortName = () => {
    let hogs = this.state.hogs.slice();
    hogs.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1))
    this.setState({ hogs });
  }

  handleSortWeight = () => {
    let hogs = this.state.hogs.slice();
    hogs.sort((a, b) => a.weight - b.weight);
    this.setState({ hogs });
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <div className="button-group">
            <FilterBtn
              showOnlyGreased={this.state.showOnlyGreased}
              handleToggleFilter={this.handleToggleFilter}
            />
            <button onClick={this.handleSortName}>Sort Name </button>
            <button onClick={this.handleSortWeight}>Sort Weight</button>
          </div>
          <div className="ui grid container">
            {this.createHog()}
          </div>
      </div>
    )
  }
}

export default App;
