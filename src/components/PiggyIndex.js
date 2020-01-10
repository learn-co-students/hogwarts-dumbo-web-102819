import React from 'react'
import PigTile from './PigTile.js'
import uuid from 'react-uuid'

export default class PiggyIndex extends React.Component {
    

    newOne = () => {
        console.log(this.props.greasedVal)
        if (this.props.greasedVal) {
            return this.props.hogs.filter((hog) => {
                return hog.greased
            }).map((hog) => {
                return <PigTile name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} highestMedal={hog['highest medal achieved']} key={uuid()}/>
            })
        } else {
            return this.props.hogs.map((hog)=> {
                return <PigTile name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} highestMedal={hog['highest medal achieved']} key={uuid()}/>
            })
        }
    }
    divideUpPigs = () => {
        if (this.props.greadedVal === true) {
            let newArr = this.props.hogs.filter((hog) => {
                hog.greased 
            })
            return newArr.map(hog => <PigTile name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} highestMedal={hog['highest medal achieved']} key={uuid()}/>)
        } 
        // else {
        //     return (
        //         this.props.hogs.map(hog => <PigTile name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} highestMedal={hog['highest medal achieved']} key={uuid()}/>)
        //     )
        // }
        // this.setState({
        //     hogs: newArr
        // })
        return (
            this.props.hogs.map(hog => <PigTile name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} highestMedal={hog['highest medal achieved']} key={uuid()}/>)
        )
    }

    render() {
        return (
            <div className="ui grid container" id="PiggyIndex">
                {this.newOne()}
            </div>
        )
    }
};

