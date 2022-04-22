import { Fragment, useState, useEffect } from "react";
import PokeCard from "../pokeCard/pokeCard";
import PokeRecent from "../pokeRecent/pokeRecent";
import './pokeDex.css';

function PokeDex() {

    // fetch https://pokeapi.co/api/v2/pokemon?offset=0&limit=9
    const [currentPokemons, setCurrentPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=9');
            const data = await response.json();
            setCurrentPokemons(data.results);
            // console.log(data.results);
        }

        getPokemons();
    }, [])


    return (
        <Fragment>
            <div className="cont">
                <div>
                    <h1><img src={process.env.PUBLIC_URL + `/img/pokeball.png`} alt="Pokeball" />POKEDEX</h1>
                    <div className="pokemons">
                    {
                        currentPokemons.map((pokemon, index) => (
                            <PokeCard key={index} current={pokemon} />
                        ))
                    }
                    </div>
                </div>
                <div>
                    <PokeRecent />
                </div>
            </div>
        </Fragment>
    )
}

export default PokeDex;