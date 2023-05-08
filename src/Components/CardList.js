import React from 'react';
import Card from './Card';

//map is essentially a for loop
const CardList = ({robots}) => {
    return (
        <div>
            { 
                robots.map((user, i) => {
                    return (
                    <Card 
                        key={i}  
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );

}

export default CardList;