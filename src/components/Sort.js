import React, { Component } from 'react';

export class Sort extends Component {
    render() {
        return (
            
                 <select onChange={(event)=>{this.props.handleSort(event)}} name="type" id="type">
                    <option value="all">All Hogs</option>
                    <option value="name">Sort by Name</option>
                    <option value="weight">Sort by Weight</option>
                 </select>
                
            
        );
    }
}

export default Sort;
