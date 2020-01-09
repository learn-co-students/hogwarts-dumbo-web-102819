import React, { Component } from 'react';
import Tile from './Tile'

class ShowTiles extends Component {

  findPhoto = (name) => {
    let convertedName = name.replace(/ /g, "_").toLowerCase()

    let imagePath = require(`../hog-imgs/${convertedName}.jpg`)

    return imagePath
  }



  displayHogs = (arrayOfHogs) => {
  return  arrayOfHogs.map((hog) => {
      let hogName = hog.name
      let hogWeight = hog.weight
      let hogGrease = hog.greased
      let hogSpecialty = hog.specialty
      let hogPhoto = this.findPhoto(hogName)

      return <Tile name= {hogName}  weight= {hogWeight} greased= {hogGrease} specialty= {hogSpecialty}
      photo= {hogPhoto} />
    })
  }

  render() {
    return (
      <div className= "ui grid container">
        {this.displayHogs(this.props.hogList)}
      </div>
    );
  }

}

export default ShowTiles;
