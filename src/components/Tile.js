import React, { Component } from 'react';

class Tile extends Component {

  state = {
    showExtra: false
  }

  handleClick = (click) => {
    this.setState({
      showExtra: !this.state.showExtra
    })
  }

  render() {
    return (
      <div className='ui card' onClick={this.handleClick}>
        <div className='image'>
          <img src={this.props.photo} alt="" />
        </div>
        <div className='content'>
          <div className='header'>{this.props.name}</div>
          <div className='extra content' style= {{display: this.state.showExtra ? "inherit" : "none"}} >
            <div className="Weight">Weight:{this.props.weight}</div>
            <div className="specialty"> Specialty: {this.props.specialty}</div>
            <div className="grease"> {this.props.greased ? `Grease: ✅` : `Grease: ❌`}</div>
          </div>
        </div>
      </div>
    );
  }

}

export default Tile;
