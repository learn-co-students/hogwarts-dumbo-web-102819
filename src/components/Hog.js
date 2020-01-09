import React, { Component } from 'react';
import HogDetail from './HogDetail'


export class Hog extends Component {
    
    state={
        detailVisible: false
    }
    handleClick=() => {
        this.setState( prevState => ({detailVisible: !prevState.detailVisible}))
    }
    render() {
        
       let lowerName = this.props.name.split(" ").join("_").toLowerCase();
       let source= require('../hog-imgs/' + lowerName + '.jpg')
       

      
        return (
            
                <div onClick={this.handleClick} className="card">
                    <div className="image">
                        <img src={source} alt={this.props.name}></img>
                    </div>
                <div className="content">
                    <a className="header">{this.props.name}</a>
                    <div className="meta">
                    <span className="date"></span>
                    </div>
                    
                </div>
                <div className="extra content">       
                    {this.state.detailVisible ? <HogDetail specialty={this.props.specialty} greased={this.props.greased} weight={this.props.weight} medal={this.props.medal}/> : null}
                </div>
                </div>
            
        );
    }
}

export default Hog;
