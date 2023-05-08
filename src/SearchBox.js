import React from 'react'

const SearchBox = ( { searchChangeFunction } ) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue'
				type="search"
				placeholder="search"
				onChange={searchChangeFunction}
			/>
		</div>
	);
}

export default SearchBox;