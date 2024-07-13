import React from 'react';
import './SearchBox.css'

// Functional component for the search input box
const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div>
            {/* Input element for searching robots */}
            <input 
                className='pa3 ba b--red bg-washed-red search' // Tachyons classes for styling
                type='search' // Input type is search
                placeholder='search robots' // Placeholder text for the input field
                name='search' // Name attribute for the input field
                id='search' // ID attribute for the input field
                onChange={searchChange} // Event handler for detecting changes in the input field
            />
        </div>
    );
}

export default SearchBox;