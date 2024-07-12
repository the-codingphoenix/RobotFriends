import React from 'react';

const Card = ({name, email, id}) => {
    // const { name, email, id } = props;
    return (
        <div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;