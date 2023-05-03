import React from 'react';
import Card from './Card'

const CardsList = ({ robots }) => {
    const CardsArray = robots.map((robot,i) => {
        return <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
    });
    return (
        <div>
            { CardsArray }
        </div>
    )
}

export default CardsList;