import React from 'react';

const Card =({name,email,id}) =>{
    return (
        <div className='tc bg-light-green dib br3 pa1 ma3 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200*200`} alt="Robo" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
