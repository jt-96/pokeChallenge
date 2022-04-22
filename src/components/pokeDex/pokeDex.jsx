import { useState, useEffect, Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PokeCard from "../pokeCard/pokeCard";
import PokeRecent from "../pokeRecent/pokeRecent";
import './pokeDex.css';

function PokeDex(props) {
    
    const filterPokemons = (pokemons, query) => {
        if (!query) {
            return pokemons;
        }
    
        return pokemons.filter((pokemon) => {
            const pokemonName = pokemon.name;
            return pokemonName.toLowerCase().includes(query);
        })
    }

    // fetch https://pokeapi.co/api/v2/pokemon?offset=0&limit=9
    const [currentPokemons, setCurrentPokemons] = useState([]);
    const [recentPokemon, setRecentPokemon] = useState([]);
    const [offset, setOffset] = useState(0);
    const filteredPokemons = filterPokemons(currentPokemons, props.query);

    const getPokemons = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?&limit=9&offset=${offset}`);
        const data = await response.json();
        if(currentPokemons.length == 0){
            setCurrentPokemons(data.results);
        } else {
            setCurrentPokemons((prevResults) => {
                return [...prevResults, ...data.results]
            })
        }
        setOffset((offset) => offset + 9);
    }

    useEffect(() => {
        getPokemons();
    }, []);

    function addRecentPokemon(pokemon) {
        setRecentPokemon((prevValue) => {
            return [pokemon, ...prevValue];
        })
    }

    return (
        <Fragment>
            <div className="cont">
                <div>
                    <h2><img src={process.env.PUBLIC_URL + `/img/pokeball.png`} alt="Pokeball" />POKEDEX</h2>
                    <div>
                        <InfiniteScroll
                            className="pokemons"
                            dataLength={filteredPokemons.length}
                            next={getPokemons}
                            hasMore={true}
                            loader={<h4>Loading...</h4>}
                            endMessage={
                                <p>Finished!</p>
                            }
                        >
                            {
                                filteredPokemons.map((pokemon, index) => (
                                    <PokeCard key={index} current={pokemon} onAddRecentPokemon={addRecentPokemon} />
                                ))
                            }
                        </InfiniteScroll>
                    </div>
                </div>
                <div>
                    <PokeRecent recent={recentPokemon} />
                </div>
            </div>
        </Fragment>
    )
}

export default PokeDex;