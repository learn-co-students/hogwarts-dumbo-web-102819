import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hog from './Hog'
import uuid from 'uuid'
import Filter from './Filter'
import Sort from './Sort'

class App extends Component {
  
  
  constructor(){
    super()
    
    this.state = {
      
      hogs: hogs,
      isGreased: false
    
    }
  }

  
 
  
  handleFilter = ()=> {
    this.setState({
      ...this.state,
      isGreased: !this.state.isGreased
    })
    

  }
  
  hogCard = () => {
    if (this.state.isGreased === true) {
      let greasedHogs = this.state.hogs.filter((hog) => {return hog.greased === true})
         return greasedHogs.map((hog, index) => {return < Hog key={uuid()} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog['highest medal achieved']} />})
    } else {
      return this.state.hogs.map((hog, index) => {return < Hog key={uuid()} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog['highest medal achieved']} />})
  }}

  handleSort=(event) => {
    const originalarray = hogs
    //console.log(originalarray);

    let value = event.target.value
    if(value === 'name') {
         let nameArr = this.state.hogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name)) 

         this.setState({
          ...this.state,
          hogs: nameArr
          })
    }
    else if(value === 'weight'){
      let weightArr = this.state.hogs.sort((hog1, hog2) => hog1.weight - hog2.weight) 
      this.setState({
       ...this.state,
       hogs: weightArr
      })
    }
    else {
      let allHogs = hogs
      this.setState({
        ...this.state,
        hogs: this.state.hogs
       })
      console.log(this.state.hogs);
    }

  }
  
  render() {
    
    return (
      <div className="App">
        
          < Nav /><Sort handleSort={this.handleSort} /><Filter isGresed={this.state.isGreased }handleFilter={this.handleFilter}/>
          <div className="ui link cards">
          {this.hogCard()}
          </div>
      </div>
    )
  }
}


export default App;
