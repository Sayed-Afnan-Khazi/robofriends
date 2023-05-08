import React, { Component } from 'react'
import CardsList from './CardsList'
import { robots } from './robots'
import SearchBox from './SearchBox'
import './App.css'

class App extends Component {
	constructor() {
		// Run react's component's constructor first
		super();
		// Setting this app's state
		// State is just a describes what our app looks like
		this.state = {
			robots:robots,
			searchField:''
		}
	}

	// React Quirk: Whenever you are creating a method for your component in React,
	// Use arrow functions so that `this` is talking about the app and not a child component
	onSearchChange = (event) => {
		// React Quirk: We must use this.setState() to set states and not this.state.name = something new
		this.setState({searchField:event.target.value});
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
				return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
			});
		return (
			<div className="tc">
			{/*State is passed as props to the children components*/}
				<h1>ROBOFRIENDS</h1>
				<SearchBox searchChangeFunction={this.onSearchChange}/>
				<CardsList robots={filteredRobots} />
			</div>
		);
	}
	
}

export default App