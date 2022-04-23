import { useEffect, useState, Fragment } from "react";
import * as ReactDOM from 'react-dom';

function Overlay() {
    return <div className="overlay" ></div>
}

function Modal(props) {
    return (
        <div className="modal">
            <img src={props.selectedPokemon.sprites?.other.home.front_default} alt="Pokemon" />
            <p>{props.selectedPokemon.name}</p>
            <p>{props.selectedPokemon.weight}</p>
            {
                props.selectedPokemon.types?.map((types, index) => (
                    <span key={index}>{types.type.name}</span>
                ))
            }
            {
                props.selectedPokemon.stats?.map((stat, index) => {
                    return <p key={index}>{stat.stat.name} - {stat.base_stat}</p>
                })
            }
            <button type="button" onClick={props.onCloseModal}>Close</button>
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
                    <Overlay />,
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