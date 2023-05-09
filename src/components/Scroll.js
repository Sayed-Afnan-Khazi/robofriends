import React from 'react';

// Soooooo reusable!
const Scroll = (props) => {
	// Here we are using props.children to use our Scroll around some other elements.
	return (
		// You can specify styles directly in JSX using an object notation.
		// Note: CSS properties are camelCased.
		<div style={{overflowY:"scroll",border:"solid 2px darkgreen",height:"75vh"}}>
			{ props.children }
		</div>
	)
}

export default Scroll;