import React from 'react';

//defining the compenent class(function)
//destructuring parameter({properties})
const Card = ({name, email, id})=>{
    return(
        <div className='tc bg-light-green dib pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?100x100`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;