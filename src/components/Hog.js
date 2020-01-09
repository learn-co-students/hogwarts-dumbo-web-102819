import React, { Component } from 'react';


class Hog extends Component
{
	state = {
		display: false,
		hideHog: true
	}

	createHogImg = (name) => {
		name = name.toLowerCase().replace(/\s+/g, '_');

		const imgSrc =  require(`../hog-imgs/${name}.jpg`);
		return <img src={imgSrc} alt={name}/> 
	}

	handleClick = () => {
		this.setState({
			display: !this.state.display
		})
	}

	hideEntireHogHandleClick = () => {
		this.setState({
			hideHog: !this.state.hideHog
		})
	}

	render() {
		const {name, specialty, greased, weight} = this.props.hog
		const highest_medal_achieved = this.props.hog["highest medal achieved"]

		return (
			<div className="ui eight wide column"> 
				<div className="ui card" onClick={this.handleClick} style={{display: this.state.hideHog ? '': 'none'}}>
					<div className="image">
						{this.createHogImg(name)}
					</div>
					<div className="content">
						<p>{name} </p>	
					</div>

					<div className="extra content" style={{display: this.state.display ? '': 'none'}}>
						<div> Specialty:  {specialty}</div>
						<div> Greased:  {greased}</div>
						<div> Weight:  {weight}</div>
						<div> Highest Medal Achieved:  {highest_medal_achieved}</div>
					</div>
				</div>

				<button onClick={this.hideEntireHogHandleClick}> Hide </button>
			</div>
		)
	}
}

export default Hog;
