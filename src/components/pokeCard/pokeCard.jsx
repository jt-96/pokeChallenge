import { Fragment, useEffect, useState } from "react";
import './pokeCard.css';

function PokeCard(props) {

    const [pokemon, setPokemon] = useState({});
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const getPokemon = async () => {
            const response = await fetch(props.current.url);
            const data = await response.json();
            setPokemon(data);
            setIsLoaded(true);
        }

        getPokemon();
    }, [isLoaded])

    return (
            <div className="card">
                <img src={pokemon?.sprites?.front_default} />
                <p>N° {pokemon.order}</p>
                <p>{pokemon.name}</p>
                {
                    pokemon?.types?.map((types, index) => (
                        <span key={index}>{types.type.name}</span>
                    ))
                }
            </div>
    );
}

export default PokeCard;