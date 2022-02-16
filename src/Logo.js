import React from "react";

function Logo(props) {
    return (
        <div>
            <header>
                <h1>Welcome to CYF's {props.appName}</h1>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="" onClick={props.handleClick}></img>
            </header>
        </div>
    );
}


export default Logo;