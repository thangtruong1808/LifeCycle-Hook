import React, { Component } from "react";

// class NavBar extends Component {
// 	render() {
// 		return (
// 			<nav className="navbar  navbar-light bg-light">
// 				<a className="navbar-brand" href="#">
// 					Navbar {""}
// 					<span className="badge bg-secondary">{this.props.totalCounters}</span>
// 				</a>
// 			</nav>
// 		);
// 	}
// }

//Stateless Functional Component
//We need to put props as a param and removed this when we use funtional instead of class
const NavBar = ({ totalCounters }) => {
	console.log("NavBar - Rendered");
	return (
		<nav className="navbar  navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Navbar {""}
				<span className="badge bg-secondary">{totalCounters}</span>
			</a>
		</nav>
	);
};

export default NavBar;

// export default NavBar;
