import { useEffect, useState, Fragment } from "react";
import * as ReactDOM from 'react-dom';
import './pokeModal.css';

function Overlay(props) {
    return <div className="overlay" onClick={props.onCloseModal}></div>
}

function Modal(props) {
    return (
        <div className="modal">
            <img className="modal__img" src={props.selectedPokemon.sprites?.other.home.front_default} alt="Pokemon" />
            <div className="modal__container">
                <p className="modal__container__title">{props.selectedPokemon.name}</p>
                <p className="modal__container__title">{props.selectedPokemon.weight}</p>
            </div>
            <div className="modal__container__info">
                <div>
                    <p className="modal__container__subtitle">Puntos Base</p>
                    <div className="modal__container__stats">
                        <div>
                            <p>PS</p>
                            <p>ATAQUE</p>
                            <p>DEFENSA</p>
                            <p>SPEC ATAQUE</p>
                            <p>SPEC DEFENSA</p>
                            <p>VELOCIDAD</p>
                        </div>
                        <div>
                            {
                                props.selectedPokemon.stats?.map((stat, index) => (
                                    <p key={index}>{stat.base_stat}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <p className="modal__container__subtitle">Tipo</p>
                    <div className="modal__container__types">
                        {
                            props.selectedPokemon.types?.map((types, index) => (
                                <div className="modal__container__types__type">

                                    <p className={`modal__container__types__type__` + types.type.name} key={index}>{types.type.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <button className="modal__button" type="button" onClick={props.onCloseModal}>X</button>
        </div>
    );
}

function PokeModal(props) {

    const [selectedPokemon, setSelectedPokemon] = useState({});

    useEffect(() => {
        async function getSelectedPokemon() {
            const response = await fetch(props.selected.url);
            const data = await response.json();
            setSelectedPokemon(data);
        }

        getSelectedPokemon();

    }, [props.selected.url])

    function handleModal() {
        props.onCloseModal(false);
    }

    return (
        <Fragment>
            {
                ReactDOM.createPortal(
                    <Overlay onCloseModal={handleModal} />,
                    document.getElementById("overlay")
                )
            }
            {
                ReactDOM.createPortal(
                    <Modal selectedPokemon={selectedPokemon} onCloseModal={handleModal} />,
                    document.getElementById("modal")
                )
            }
        </Fragment>
    );
}

export default PokeModal;