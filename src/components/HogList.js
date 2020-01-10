import React, { Component } from 'react';
import Piggy from './Piggy'
import hogs from '../porkers_data';

class HogList extends Component {

    state = {
        hogs: hogs,
        filteringGreased: false,
        sorted: null
    }

    toggleGreased = () => {
        let current = this.state.filteringGreased
        this.setState({
            filteringGreased: !current
        })
    }

    toggleSort = (evt) => {
        this.setState({
            sorted: evt.target.value
        })
    }

    genPiggies = () => {
        let hogHolder = []
        if(this.state.filteringGreased){
            hogHolder = this.state.hogs.filter((piggy)=>{
                return !piggy.greased
            })
        } else {
            hogHolder = this.state.hogs
        }

        console.log(this.state.sorted)

        if (this.state.sorted == 'weight'){
            hogHolder.sort(function(a, b){return a.weight-b.weight})
        } else if (this.state.sorted == 'name'){
            hogHolder.sort(function(a, b){
                if(a.name < b.name){
                    return -1
                }
                if(a.name > b.name){
                    return 1
                }
                return 0
            })
        }

        console.log(hogHolder)

        return hogHolder.map((piggy, i) => {
            return <Piggy key={i} data={piggy}/>
        })
    }

    render() {
        return (
            <div className="hogInterface">
                <button onClick={this.toggleGreased} style={{margin: '1em'}}>Filter Greased Piggies</button>
                <select onChange={this.toggleSort}>
                    <option value="none">Select Your Option</option>
                    <option value="name">Sort By Name</option>
                    <option value="weight">Sort By Weight</option>
                </select>
                <div className="ui grid container cards">
                    {this.genPiggies()}
                </div>
            </div>
        );
    }
}

export default HogList;