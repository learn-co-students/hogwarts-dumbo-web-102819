import React, { Component } from 'react';

class Hog extends Component {

    state = {
        display: false,
        show: true
    }

    getHogImg = (name) => {
        let newName = name.toLowerCase().replace(/\s+/g, '_');
        let source = require(`../hog-imgs/${newName}.jpg`);
        return <img alt={name} src={source} />
    }

    handleClick = () => {
        this.setState({
            display: !this.state.display
        });
    }

    handleToggleHide = () => {
        this.setState({
            show: !this.state.show
        })
    }
    
    
    render() {
        const { name, specialty, greased, weight } = this.props.hog;
        const medal = this.props.hog["highest medal achieved"];
        
        return (
            <div className="ui eight wide column" >
                <div className="ui card" onClick={this.handleClick} style={{display: this.state.show ? 'block' : 'none'}}>
                    <div className="image">
                        { this.getHogImg(name) }
                    </div>
                    <div className="content">
                        <h5>{name}</h5>
                        
                    </div>
                    <div className="extra content" style={{display: this.state.display ? '' : 'none'}}>
                        <div>Specialty: {specialty}</div>
                        <div>Greased: {String(greased)}</div>
                        <div>Weight: {weight}</div>
                        <div>Medal: {medal}</div>
                    </div>          
                </div>
                <button onClick={this.handleToggleHide}>Show</button>
            </div>
        );
    }
}

export default Hog