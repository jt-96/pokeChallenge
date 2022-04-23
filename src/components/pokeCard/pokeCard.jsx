import { Fragment, useEffect, useState } from "react";
import PokeModal from "../pokeModal/pokeModal";
import './pokeCard.css';

function PokeCard(props) {
    console.log(props);
    const [pokemon, setPokemon] = useState({});
    const [url, setUrl] = useState(props.current.url);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        async function getAPokemon() {
            const response = await fetch(url);
            const data = await response.json();
            setPokemon(data);
        }

        getAPokemon();

    },[]);

    function handleClick() {
        setIsActive(true);
        props.onAddRecentPokemon(pokemon);
    }

    function closeModal(result) {
        setIsActive(result);
    }

    return (
        <Fragment>
            {
                isActive && <PokeModal selected={props.current} onCloseModal={closeModal}/>
            }
            <div className="card" onClick={handleClick}>
                <img src={pokemon.sprites?.other.home.front_default} alt="pokemon"/>
                <p>N° {pokemon.id}</p>
                <p>{pokemon.name}</p>
                {
                    pokemon.types?.map((types, index) => (
                        <span key={index}>{types.type.name}</span>
                    ))
                }
            </div>
        </Fragment>
    );
}

export default PokeCard;