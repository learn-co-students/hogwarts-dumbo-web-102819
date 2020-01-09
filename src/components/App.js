import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hog from "./Hog";

class App extends Component {

	state = {
		hogs: hogs,
		showOnlyGreased: false
	}

	createHogDivs = () => {
		if (this.state.showOnlyGreased)
		{
			return this.state.hogs.filter((hog) => {
				return hog.greased
			}).map((hog) => {
				return <Hog hog={hog} />
			})
		}
		else
		{
			return this.state.hogs.map((hog) => {
				return <Hog hog={hog} />
			})
		}
		
	}

	greasedFilterHandler = () => {
		this.setState({
			showOnlyGreased: !this.state.showOnlyGreased
		})
	}

	nameFilterHandler = () => {
		let tempHogs = this.state.hogs
		this.setState({
			hogs: tempHogs.sort((a,b) => (a.name > b.name) ? 1 : -1)
		})
	}

	weightFilterHandler = () => {
		let tempHogs = this.state.hogs
		this.setState({
			hogs: tempHogs.sort((a,b) => (a.weight > b.weight) ? 1 : -1)
		})
	}

  render() {
    return (
      <div className="App">
          < Nav />
          <div className="button_group">
          	<button onClick={this.greasedFilterHandler}> Show Only Greesed: {String(this.state.showOnlyGreased)} </button>
          	<button onClick={this.nameFilterHandler}> Filter By Name </button>
          	<button onClick={this.weightFilterHandler}> Filter By Weight </button>
          </div>
          <div className="ui grid container"> 
          	{this.createHogDivs()}
          </div>
      </div>
    )
  }
}

export default App;
