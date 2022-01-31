import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
	render() {
		//Destructuring Arguments
		console.log("Counters - Rendered");
		const { onReset, counters, onDelete, onIncrement } = this.props;
		return (
			<div>
				<button onClick={onReset} className="btn btn-primary btn-sm m-2">
					Reset
				</button>
				{this.props.counters.map((counter) => (
					<Counter
						key={counter.id}
						value={counter.value}
						onIncrement={onIncrement}
						id={counter.id}
						counter={counter}
						onDelete={onDelete}
					></Counter>
				))}
			</div>
		);
	}
}

export default Counters;
