import PokeRecentCard from "../pokeRecentCard/pokeRecentCard";
import './pokeRecent.css';
function PokeRecent(props){

    return (
        <div className="recentContainer">
            <h2><img src={process.env.PUBLIC_URL + `/img/pokeball.png`} alt="Pokeball" />RECIENTES</h2>
            {
                props.recent?.slice(0, 3).map((pokemon, index) => (

                    <PokeRecentCard key={index} pokemon={pokemon}/>
                ))
            }
        </div>
    )
}

export default PokeRecent;