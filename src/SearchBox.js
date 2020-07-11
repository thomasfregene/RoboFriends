import React from 'react';

const SearchBox = ({searchField, searchChange})=>{
    return(
        //to have multiple tags in a return state it advisable to use a div
        <div className='pa2'>
            <input className='pa3 ba  b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots'
            onChange = {searchChange}/>

        </div>
    );
}

export default SearchBox;