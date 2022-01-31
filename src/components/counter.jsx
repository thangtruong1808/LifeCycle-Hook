import React, { Component } from "react";

class Counter extends Component {
	componentDidUpdate(preProps, prevState) {
		console.log("preProps", preProps);
		console.log("prevState", prevState);
		if (preProps.counter.value !== this.props.counter.value) {
			//Ajax call and get new data from the server
		}
	}

	componentWillUnmount() {
		console.log("Counter - Unmount");
	}
	// state = {
	// 	value: this.props.value,
	// };

	// this.handleIncrement = this.handleIncrement.bind(this);
	// handleIncrement = () => {
	// 	this.setState({ value: this.state.value + 1 });
	// };
	// handleDecrement = () => {
	// 	this.setState({ value: this.state.value - 1 });
	// };

	// handleReset = () => {
	// 	this.setState({ value: (this.state.value = 0) });
	// };

	render() {
		console.log("Counter - Rendered");
		//console.log("props", this.props);
		return (
			<div>
				{/* <h4>{this.props.id}</h4> */}
				<span className={this.getBadgeClasess()}>{this.formatCount()}</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-primary btn-sm m-2"
				>
					Increment
				</button>

				<button
					onClick={() => this.props.onDelete(this.props.id)}
					className="btn btn-danger btn-sm sm-2"
				>
					Delete
				</button>
			</div>
		);
	}
	//Comment
	getBadgeClasess() {
		let classes = "badge m-2 bg-";
		classes += this.props.counter.value === 0 ? "warning" : "info";
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;
