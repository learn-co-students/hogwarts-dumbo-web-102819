import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Tile from './Tile';
import ShowTiles from './ShowTiles'

class App extends Component {

  state = {
    hogList: [...hogs]
  }

  sortName = (evt) => {
    console.log(this.state.hogList[0].name);
    this.setState({
      hogList: this.state.hogList.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    })
  }

  sortWeight = (evt) => {
    this.setState({
      hogList: this.state.hogList.sort((a, b) =>  b.weight - a.weight)
    })
  }



  render() {
    return (
      <div className="App">
        <Nav sortName={this.sortName} sortWeight={this.sortWeight} />
        <ShowTiles hogList= {this.state.hogList} />
      </div>
    )
  }
}

export default App;
