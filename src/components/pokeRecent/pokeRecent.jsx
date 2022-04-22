import PokeRecentCard from "../pokeRecentCard/pokeRecentCard";
import './pokeRecent.css';
function PokeRecent(){

    return (
        <div className="recentContainer">
            <h2><img src={process.env.PUBLIC_URL + `/img/pokeball.png`} alt="Pokeball" />RECIENTES</h2>
            <PokeRecentCard />
            <PokeRecentCard />
            <PokeRecentCard />
        </div>
    )
}

export default PokeRecent;