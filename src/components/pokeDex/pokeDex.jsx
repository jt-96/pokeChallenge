import { useState, useEffect, Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PokeCard from "../pokeCard/pokeCard";
import PokeRecent from "../pokeRecent/pokeRecent";
import './pokeDex.css';

function filterPokemons(pokemons, query) {
    if (!query) {
        return pokemons;
    }

    return pokemons.filter((pokemon) => {
        const pokemonName = pokemon.name;
        return pokemonName.toLowerCase().includes(query);
    })
}

function PokeDex(props) {


    const [currentPokemons, setCurrentPokemons] = useState([]);
    const [recentPokemon, setRecentPokemon] = useState([]);
    const [offset, setOffset] = useState(0);
    const filteredPokemons = filterPokemons(currentPokemons, props.query);

    async function getPokemons() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?&limit=9&offset=${offset}`);
        const data = await response.json();

        if (currentPokemons.length === 0) {
            setCurrentPokemons(data.results);

        } else {
            setCurrentPokemons((prevResults) => {
                return [...prevResults, ...data.results]
            });
        }

        setOffset((offset) => offset + 9);
    }

    useEffect(() => {
        getPokemons();
    }, []);

    function addRecentPokemon(pokemon) {
        setRecentPokemon((prevValue) => {
            return [pokemon, ...prevValue];
        });
    }

    return (
        <Fragment>
            <div className="pokedex">
                <div>
                    <h2 className="pokedex__title"><img className="pokedex__img" src={process.env.PUBLIC_URL + `/img/pokeball.png`} alt="Pokeball" />POKEDEX</h2>
                    <div>
                        <InfiniteScroll
                            className="pokedex__pokemons"
                            dataLength={filteredPokemons.length}
                            next={getPokemons}
                            hasMore={true}
                            loader={<h4 className="pokedex__loading"><img className="pokedex__img" src={process.env.PUBLIC_URL + `/img/pokeball.png`} alt="Pokeball" /> Cargando...</h4>}
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
                <div className="pokedex__recent">
                    <h2 className="pokedex__title"><img className="pokedex__img" src={process.env.PUBLIC_URL + `/img/pokeball.png`} alt="Pokeball" />RECIENTES</h2>
                    <PokeRecent recent={recentPokemon} />
                </div>
            </div>
        </Fragment>
    )
}

export default PokeDex;