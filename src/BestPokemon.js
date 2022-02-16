import React from "react";

function BestPokemon(props) {
    return (
        <div>
            <p>My best pokemon is Pewpok</p>
            <ul>
                {props.abilities.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default BestPokemon;