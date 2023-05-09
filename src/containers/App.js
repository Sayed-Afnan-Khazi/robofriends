import React, { Component } from 'react';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		// Run react's component's constructor first
		super();
		// Setting this app's state
		// State is just a describes what our app looks like
		this.state = {
			robots:[],
			searchField:''
		}
	}

	componentDidMount() {
		// Runs after the component is rendered.
		// We are using this API to get our users/"robots"
		// We then update our state. NOTE: Updating the state will cause a re-render. Check the update component lifecyle methods' order of execution.
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots:users }));
	}

	// React Quirk: Whenever you are creating a method for your component in React,
	// Use arrow functions so that `this` is talking about the app and not a child component
	onSearchChange = (event) => {
		// React Quirk: We must use this.setState() to set states and not this.state.name = something new
		this.setState({searchField:event.target.value});
	}

	render() {
		// Runs after the component is constructed
		const { robots,searchField } = this.state;
		const filteredRobots = robots.filter(robot => {
				return robot.name.toLowerCase().includes(searchField.toLowerCase());
			});
		return !robots.length ?
			// Our little loading bar for when the robots are loading in.
			<h1 className='tc'>Loading your Robofriends, hang on tight!</h1> :
			(
				<div className="tc">
				{/*State is passed as props to the children components*/}
					<h1>ROBOFRIENDS</h1>
					<SearchBox searchChangeFunction={this.onSearchChange}/>
					<Scroll>
						<CardsList robots={filteredRobots} />
					</Scroll>
				</div>
			);
	}
}

export default App;