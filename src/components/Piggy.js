import React, { Component } from 'react';

class Piggy extends Component {

    state = {
        isHidden: false,
        displayDetails: false
    }

    getImg = (name) => {
        let slug = name.replace(/\s/g, "_").toLowerCase()
        return require(`../hog-imgs/${slug}.jpg`)
    }

    isDisplayed = () => {
        return this.state.displayDetails ? "block" : "none"
    }

    isHidden = () => {
        return this.state.isHidden ? "none" : "inline-block"
    }

    toggleHidden = () => {
        let current = this.state.isHidden
        this.setState({
            isHidden: !current
        })
    }

    handleClick = (evt) => {
        let current = this.state.displayDetails
        this.setState({
            displayDetails: !current
        })
    }

    render() {
        let data = this.props.data
        return (
            <div onClick={this.handleClick} className="ui card" style={{display: this.isHidden()}}>
                <div className="image">
                    <img src={this.getImg(data.name)}></img>
                </div>
                <div className="content">
                    <div className="header">
                        <p>{data.name}</p>
                    </div>
                </div>
                <div className="details content" style={{display: this.isDisplayed()}}>
                    <p>Specialty: {data.specialty}</p>
                    <p>Greased: {data.greased.toString()}</p>
                    <p>Weight: {data.weight}</p>
                    <p>Highest Medal: {data["highest medal achieved"]}</p>
                    <button onClick={this.toggleHidden}>Hide Hog</button>
                </div>
            </div>
        );
    }
}

export default Piggy;