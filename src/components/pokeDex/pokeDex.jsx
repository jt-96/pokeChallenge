import { Fragment, useState, useEffect } from "react";
import PokeCard from "../pokeCard/pokeCard";
import PokeRecent from "../pokeRecent/pokeRecent";
import './pokeDex.css';

function PokeDex() {

    // fetch https://pokeapi.co/api/v2/pokemon?offset=0&limit=9
    const [currentPokemons, setCurrentPokemons] = useState([]);
    const [recentPokemon, setRecentPokemon] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=9');
            const data = await response.json();
            setCurrentPokemons(data.results);
        }

        getPokemons();

    }, []);

    function addRecentPokemon(pokemon){
        setRecentPokemon((prevValue) => {
            return [pokemon, ...prevValue];
        })
    }

    return (
        <div className="cont">
            <div>
                <h2><img src={process.env.PUBLIC_URL + `/img/pokeball.png`} alt="Pokeball" />POKEDEX</h2>
                <div className="pokemons">
                    {
                        currentPokemons.map((pokemon, index) => (
                            <PokeCard key={index} current={pokemon} onAddRecentPokemon={addRecentPokemon}/>
                        ))
                    }
                </div>
            </div>
            <div>
                <PokeRecent recent={recentPokemon}/>
            </div>
        </div>
    )
}

export default PokeDex;