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
                <p>{props.selectedPokemon.name}</p>
                <p>{props.selectedPokemon.weight}</p>
            </div>
            <div className="modal__container__info">
                <div>

                    <p>Puntos Base</p>
                    {
                        props.selectedPokemon.stats?.map((stat, index) => {
                            return <p key={index}>{stat.stat.name} - {stat.base_stat}</p>
                        })
                    }
                </div>
                <div>
                    <p>Tipo</p>
                    {
                        props.selectedPokemon.types?.map((types, index) => (
                            <span key={index}>{types.type.name}</span>
                        ))
                    }
                </div>
            </div>
            <button className="modal__button" type="button" onClick={props.onCloseModal}>Close</button>
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