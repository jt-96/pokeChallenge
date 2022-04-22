import { Fragment, useEffect, useState } from "react";
import PokeModal from "../pokeModal/pokeModal";
import './pokeCard.css';

function PokeCard(props) {

    const [pokemon, setPokemon] = useState({});
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const getPokemon = async () => {
            const response = await fetch(props.current.url);
            const data = await response.json();
            setPokemon(data);
        }

        getPokemon();

    }, [pokemon]);

    function handleClick() {
        setIsActive(true);
        props.onAddRecentPokemon(pokemon);
    }

    function closeModal(result) {
        setIsActive(result)
    }

    return (
        <Fragment>
            {
                isActive && <PokeModal selected={props.current} onCloseModal={closeModal}/>
            }
            <div className="card" onClick={handleClick}>
                <img src={pokemon.sprites?.other.home.front_default} />
                <p>N° {pokemon.order}</p>
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