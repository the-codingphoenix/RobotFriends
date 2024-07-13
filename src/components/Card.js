import React from 'react';
import './Card.css'

const Card = ({name, email, id}) => {
    // const { name, email, id } = props;
    return (
        <div className='tc dib pa3 ma2 grow bw2 shadow-2 card'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;