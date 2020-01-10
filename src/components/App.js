import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {

  state = {
    hogs: [],
    greasedOnly: false,
    sortedByName: false,
    sortedByWeight: false
  }

  componentDidMount(){
    this.setState({
      hogs: hogs
    })
  }

  greasedHandler = () => {
    this.setState({
      greasedOnly: !this.state.greasedOnly
    })
  }

  sortByName = () => {
    this.setState({
      sortedByName: !this.state.sortedByName,
      sortedByWeight: false
    })
  }
  sortByWeight = () => {
    this.setState({
      sortedByWeight: !this.state.sortedByWeight,
      sortedByName: false
    })
  }

  render() {
    let hihogs = [...this.state.hogs]

    if (this.state.greasedOnly) {
      hihogs = hihogs.filter((hog) => {
        return hog.greased;
      })
    } 
    if (this.state.sortedByName) {
      hihogs = hihogs.sort((a, b)=> {
        return a.name.localeCompare(b.name)
      })
    } 
    if (this.state.sortedByWeight) {
      hihogs = hihogs.sort((a, b) => {
        return b.weight - a.weight
      })
    }

    return (
      <div className="App">
          < Nav greasedHandler={this.greasedHandler} sortByName={this.sortByName} sortByWeight={this.sortByWeight} />
          < HogContainer hogs={hihogs} /> 

      </div>
    )
  }
}

export default App;
