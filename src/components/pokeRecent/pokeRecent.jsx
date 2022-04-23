import PokeRecentCard from "../pokeRecentCard/pokeRecentCard";

function PokeRecent(props){

    return (
        <div>
            {
                props.recent?.slice(0, 3).map((pokemon, index) => (

                    <PokeRecentCard key={index} pokemon={pokemon}/>
                ))
            }
        </div>
    )
}

export default PokeRecent;