import { useEffect, useState } from "react";

function PokeModal(props) {

    const [selectedPokemon, setSelectedPokemon] = useState({});

    useEffect(() => {
        const getPokemon = async () => {
            const response = await fetch(props.selected.url);
            const data = await response.json();
            setSelectedPokemon(data);
        }

        getPokemon();
    }, [])

    return (
        <div className="modal">
            <img src={selectedPokemon.sprites?.front_default} alt="Pokemon" />
            <p>{selectedPokemon.name}</p>
            <p>{selectedPokemon.weight}</p>
            {
                selectedPokemon.types?.map((types, index) => (
                    <span key={index}>{types.type.name}</span>
                ))
            }
            {
                selectedPokemon.stats?.map((stat, index) => {
                    return <p key={index}>{stat.stat.name} - {stat.base_stat}</p>
                })
            }
        </div>
    );
}

export default PokeModal;