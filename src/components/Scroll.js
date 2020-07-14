import React from 'react';

//childre is used for components housing other component or properties
const Scroll = (props)=>{
    return(
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    );
}

export default Scroll