import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {

	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<span className="sortButtons"><button onClick={props.sortName}>Sort By Name</button><button onClick={props.sortWeight}>Sort By Weight</button></span>
		</div>
	)
}

export default Nav
