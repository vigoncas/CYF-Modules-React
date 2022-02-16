import React, { useState } from "react";

function CaughtPokemon(props) {

    const [caught, setCaught] = useState(0);

    function catchCliked() {
        setCaught(caught + 1);
    }

    return (
        <p>Caught {caught} Pokemon on {props.date} <button onClick={catchCliked}>Catch</button></p>
    );
}

export default CaughtPokemon;