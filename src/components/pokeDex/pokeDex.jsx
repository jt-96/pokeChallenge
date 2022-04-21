import { Fragment } from "react";
import PokeCard from "../pokeCard/pokeCard";

function PokeDex(){

    return (
        <Fragment>
            <h1>LOGO - POKEDEX</h1>
            <PokeCard />
            <PokeCard />
            <PokeCard />
        </Fragment>
    )
}

export default PokeDex;