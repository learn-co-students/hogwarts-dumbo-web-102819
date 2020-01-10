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
			<br />
			<button onClick={props.greasedHandler}> GREASED </button> 
			<button onClick={props.sortByName}> SORT ME BY NAME </button> 
			<button onClick={props.sortByWeight}> SORT ME BY WEIGHT</button>
		</div>
	)
}

export default Nav
