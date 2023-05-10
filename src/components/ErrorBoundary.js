import React, { Component } from 'react';

// Our custom "error boundary" which is like an error catcher
class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}
	// Lifecycle method that checks of the component caught an error.
	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <h1> Uh oh, something went wrong.</h1>
		}
		return this.props.children;
	}
}

export default ErrorBoundary;