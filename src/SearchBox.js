import React from 'react';

const SearchBox = () => {
    return (
        <div>
            <input 
                className='pa3 ba b--red bg-washed-red '
                type='search'
                placeholder='search robots'
                name='search'
                id='search'
            />
        </div>
    )
}

export default SearchBox;