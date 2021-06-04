/** @format */

import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [
				{
					name: "Frankenstein",
					id: "asci1",
				},
				{
					name: "Dracula",
					id: "asr2",
				},
				{
					name: "Zombie",
					id: "a3",
				},
			],
		};
	}

	render() {
		return (
			<div className="App">
				{this.state.monsters.map((el) => (
					<h1 key={el.id}>{el.name}</h1>
				))}
			</div>
		);
	}
}

export default App;
