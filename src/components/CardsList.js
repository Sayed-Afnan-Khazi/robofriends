import React from 'react';
import Card from './Card';

const CardsList = ({ robots }) => {
    // throw new Error("Noooooo!"); // Checking if our error boundary is working.
    return (
        <div>
            { 
                robots.map((robot,i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robot.id} 
                            name={robot.name} 
                            email={robot.email}
                         />
                        )
                    }
                )   
            }
        </div>
    )
}

export default CardsList;