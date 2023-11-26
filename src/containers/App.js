import React, { useState, useEffect } from 'react';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { connect } from 'react-redux';
import { setSearchField } from '../actions';

const mapStateToProps = state => {
	// Which props need to listen to the state and get values?
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = dispatch => {
	// What props should redux listen to that are actions?
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

function App({onSearchChange, searchField}) {

	const [robots,setRobots] = useState([]);
	// const [searchField, setSearchField] = useState('');


	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => setRobots(users));
	},[]);
	// Empty dependency array ensures that the effect is only run once (during mounting)

	// Runs after the component is constructed
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
				<SearchBox searchChangeFunction={onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardsList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
}

export default connect(mapStateToProps,mapDispatchToProps)(App); // Connect is a higher order function, it returns another function that is called with our component.