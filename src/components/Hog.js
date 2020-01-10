import React from 'react'

export default class Hog extends React.Component {
    state = {
        showInfo: false
    }

    convertNameToImage = (name) => {
        let tempString = name.toLowerCase()
        let tempArr = tempString.split(" ")
        let imageName = tempArr.join("_")
        return imageName
    }

    handleClick = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }   
    
    render(){
        const {
            name, 
            weight, 
            specialty, 
            greased,
            "highest medal achieved": medal
        } = this.props.hog

        return(
            <div className="ui eight wide column">
                <h1>Name: {name}</h1>
                <img 
                    onClick={this.handleClick} 
                    src={require(`../hog-imgs/${this.convertNameToImage(name)}.jpg`)} alt="hogPic" 
                />
                {this.state.showInfo ? 
                <div>
                <p>Weight: {weight}</p>
                <p>Specialty: {specialty}</p>
                <p>Greased: {greased ? "True" : "False"}</p>
                <p>Highest Medal Achieved: {medal}</p>
                </div>
                    : null
                }
            </div>
        )

    }

}