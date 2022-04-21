import { Fragment, useState, useEffect } from "react";
import PokeCard from "../pokeCard/pokeCard";

function PokeDex(){

    // fetch https://pokeapi.co/api/v2/pokemon?offset=0&limit=9
    const [currentPokemons, setCurrentPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=9');
            const data = await response.json();
            setCurrentPokemons(data.results);
            console.log(data);
        }

        getPokemons();
    }, [])


    return (
        <Fragment>
            <h1>LOGO - POKEDEX</h1>
            {
                currentPokemons.map((pokemon) => (
                    <PokeCard current={pokemon}/>
                ))
            }
        </Fragment>
    )
}

export default PokeDex;