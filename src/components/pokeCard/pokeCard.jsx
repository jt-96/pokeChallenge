import { Fragment, useEffect, useState } from "react";
import PokeModal from "../pokeModal/pokeModal";
import './pokeCard.css';

function PokeCard(props) {
    const [pokemon, setPokemon] = useState({});
    const [isActive, setIsActive] = useState(false);
    
    useEffect(() => {
        async function getAPokemon() {
            const response = await fetch(props.current.url);
            const data = await response.json();
            setPokemon(data);
        }

        getAPokemon();

    }, [props]);

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
                isActive && <PokeModal selected={props.current} onCloseModal={closeModal} />
            }
            <div className="card" onClick={handleClick}>
                <img className="card__img" src={pokemon.sprites?.other.home.front_default} alt="pokemon" />
                <p className="card__title">N. °{pokemon.id}</p>
                <p className="card__title">{pokemon.name}</p>
                <div className="card__types">
                    {
                        pokemon.types?.map((types, index) => (
                            <div className="card__types__container" key={index}>
                                <p className={`card__types__container__type__` + types.type.name}>{types.type.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    );
}

export default PokeCard;