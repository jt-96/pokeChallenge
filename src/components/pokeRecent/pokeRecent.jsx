import PokeRecentCard from "../pokeRecentCard/pokeRecentCard";
import './pokeRecent.css';

function PokeRecent(props){

    return (
        <div className="recent">
            {
                props.recent?.slice(0, 3).map((pokemon, index) => (

                    <PokeRecentCard key={index} pokemon={pokemon}/>
                ))
            }
        </div>
    )
}

export default PokeRecent;