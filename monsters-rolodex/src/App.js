/** @format */

import React, { Component } from "react";
import { CardList } from "./components/card_list/card_list";
import { SearchBox } from "./components/search_box/search_box";

import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("http://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((users) => this.setState({ monsters: users }));
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((el) =>
			el.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<SearchBox
					placeholder="search monsters"
					handleChange={(e) => this.setState({ searchField: e.target.value })}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
