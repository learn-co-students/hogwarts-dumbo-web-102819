import React, { Component } from 'react';

export class HogDetail extends Component {
    render() {
        return (
            <div>
                <div className="specialty">Specialty: {this.props.specialty}</div>
                <div className="greased">Greased: {this.props.greased? 'Yes' : 'No'}</div>
                <div className="weight">Weight: {this.props.weight} kg</div>
                <div className="medal">Highest medal achieved: {this.props.medal}</div>
            </div>
        );
    }
}

export default HogDetail;
