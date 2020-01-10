import React, { Component } from 'react';

class FilterBtn extends Component {
    render() {
        return(
            <button onClick={this.props.handleToggleFilter}> 
                Show Greased: {this.props.showOnlyGreased ? "ON" : 'OFF'}
            </button>
        )
    }
}

export default FilterBtn;