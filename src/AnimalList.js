import React from "react";

const data = [
    { id: 1, name:'🐈 Laia' },
    { id: 2, name:'🐕‍🦺 Riley' },
    { id: 3, name:'🐩 Tammy-Ann' },
    { id: 4, name:'🐕 Ivor' }
]

function ListOfAnimals() {
    return (
        <ul>        
            {data && data.map(({ id, name }) => {
                return <li key={id}>
                    {name}
                    </li>
            })}
        </ul>
    );
}


export default ListOfAnimals;