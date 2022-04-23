import './pokeRecentCard.css';

function PokeRecentCard(props) {

    return (
        <div className='recent'>
            <img className='recent__image' src={props.pokemon.sprites?.other.home.front_default} alt="Recent Pokemon" />
            <div className='recent__info'>
                <span className='recent__info__title'>{props.pokemon.name}</span>
                <span className='recent__info__title'>{props.pokemon.weight}</span>
            </div>
            <div className='recent__info'>
                <span>Tipo</span>
                {
                    props.pokemon.types?.map((types, index) => (
                        <span className={`recent__info__` + types.type.name} key={index}>{types.type.name}</span>
                    ))
                }
            </div>
            <div className='recent__info'>
                <span>Habilidad</span>
                {
                    props.pokemon.abilities?.map((skill, index) => (
                        <span key={index}>{skill.ability.name}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default PokeRecentCard;