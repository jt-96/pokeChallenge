import './pokeRecentCard.css';

function PokeRecentCard(props) {

    return (
        <div>
            <img src={props.pokemon.sprites?.other.home.front_default} alt="Recent Pokemon"/>
            <span>{props.pokemon.name} {props.pokemon.weight}</span>
            <span>Tipo</span>
            {
                props.pokemon.types?.map((types, index) => (
                    <p key={index}>{types.type.name}</p>
                ))
            }
            <span>Habilidad</span>
            {
                props.pokemon.abilities?.map((skill, index) => (
                    <p key={index}>{skill.ability.name}</p>
                ))
            }
        </div>
    )
}

export default PokeRecentCard;