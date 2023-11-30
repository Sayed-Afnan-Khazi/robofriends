import React, { useEffect } from 'react';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
	// Which props need to listen to the state and get values?
	return {
		// searchField: state.searchField
		// Since we're using a multiple reducers in a root reducer now, we need to specify which reducer we're talking about
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = dispatch => {
	// What props should redux listen to that are actions?
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

function App({onSearchChange, searchField, onRequestRobots, robots, isPending}) {


	useEffect(() => {
		onRequestRobots()
		// eslint-disable-next-line
	},[]);
	// Empty dependency array ensures that the effect is only run once (during mounting)

	// Runs after the component is constructed
	const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
	return isPending ?
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