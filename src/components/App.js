import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PiggyIndex from './PiggyIndex.js'

class App extends Component {

  state = {
    hogs: hogs,
    greasedVal: false
  }

  seeGreased = () => {
    this.setState((prev, props) => ({
      greasedVal: !prev.greasedVal
    }))
    // let onlyGreased = this.state.hogs.filter((hog) => {
    //   hog.greased === true 
    // })
    // console.log(onlyGreased)
    // this.setState({
    //   hogs: onlyGreased
    // })
    
  }

  sortByWeight = () => {
    this.setState({
      hogs: hogs
    })
    let newArray = this.state.hogs.map(a => Object.assign({}, a));
    let sortedWeight = newArray.sort(function(a, b) {
      return a.weight - b.weight
    })
    this.setState({
      hogs: sortedWeight 
    })
  }

  sortByName = () => {
    let newArray = this.state.hogs.map(a => Object.assign({}, a));
    let sortedName = newArray.sort((a, b)  => (a.name > b.name) ? 1 : -1)
    this.setState({
      hogs: sortedName
    })
  }

  render() {
    return (
      <div className="App">
        <button className="rightside" onClick={this.seeGreased}>See Greased</button>
        <button className="rightside" onClick={this.sortByWeight}>Sort By Weight</button> 
        <button className="rightside" onClick={this.sortByName}>Sort By Name</button> 
        < Nav />
        < PiggyIndex greasedVal={this.state.greasedVal} hogs={this.state.hogs}/> 
      </div>
    )
  }
}

export default App;
