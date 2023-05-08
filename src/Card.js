import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className="tc bg-light-green dib pa3 br3 ma2 grow bw3 shadow-3">
            <img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <p className='b'>{name}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;