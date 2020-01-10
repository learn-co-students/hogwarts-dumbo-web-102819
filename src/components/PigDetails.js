import React from 'react'

export default class PigDetails extends React.Component {

    render() {
        return (
            <div>
                <p>Name: {this.props.piggie.name}</p>
                <p>Specialty: {this.props.piggie.specialty}</p>
                <p>Weight: {this.props.piggie.weight}</p>
                <p>Highest Medal Achieved: {this.props.piggie.highestMedal}</p>
            </div> 
        )
    }


}

// name: 'Cherub',
//     specialty: 'truffle finder',
//     greased: false,
//     weight: 0.7,
//     'highest medal achieved': 'gold'