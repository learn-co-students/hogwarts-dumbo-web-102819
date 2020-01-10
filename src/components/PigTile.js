import React from 'react'
import PigDetails from './PigDetails.js'
// /Users/dominicchu/Flatiron/4/hogwarts-dumbo-web-102819/src/hog-imgs/augustus_gloop.jpg
export default class PigTile extends React.Component {
    constructor() {
        super()
        this.state = {
            frontSide: false, 
            hideMe: false 
        }
    }
    
    getImage = hogName => {
        let formattedName = hogName
          .split(" ")
          .join("_")
          .toLowerCase();
        let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
        return pigPics;
    };
    changeRender = () => {
        this.setState({
            frontSide: !this.state.frontSide
        })
    }
    hideMe = () => {
        console.log(this)
        this.setState((prev, props) => ({
            hideMe: !prev.hideMe
        }), console.log(this.state))
        /// you gon have to set a new state variable 
        /// and terniary that variable's boolean value 
        /// then render or not to render 
        
        
    }

    showAll = () => {
        return (
            <button id={this.props.key} visibility="visibible" onClick={this.changeRender}>               
                <img src={this.getImage(this.props.name)} alt='hog-imgs' /> 
                <p>{this.props.name}</p>     
                <button onClick={this.hideMe}/>     
                {/* <button onClick={this.changeRender}> */}
                    SHOW MORE?
                    {this.state.frontSide ? <PigDetails piggie={this.props} /> : null }
                {/* </button> */}

                </button>        
                )
    }
    
    domeme = () => {
        if (this.state.hideMe) {
            return null
        } else {
            return (
                <button visibility="visibible" onClick={this.changeRender}> 
                    <img src={this.getImage(this.props.name)} alt='hog-imgs' /> 
                    <p>{this.props.name}</p>     
                    {/* <button onClick={this.changeRender}> */}
                        SHOW MORE?
                        {this.state.frontSide ? <PigDetails piggie={this.props} /> : null }
                    {/* </button> */}
                    <button onClick={this.hideMe}> HIDE ME ?</button>  
                    </button>    
                    )
        }
    }

    render() {
        return (
            <div> 
            {this.domeme()}

            </div>
        )
    }
}