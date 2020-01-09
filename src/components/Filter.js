import React, { Component } from 'react';

export class Filter extends Component {
    
    render() {
        return (
            
        <button onClick={this.props.handleFilter} className="filter-button">{this.props.isGresed? 'Greased Hogs: On' : 'Greased Hogs: Off'} </button>
            
        );
    }
}

export default Filter;
