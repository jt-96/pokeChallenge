import { Fragment } from "react";
import PokeRecentCard from "../pokeRecentCard/pokeRecentCard";

function PokeRecent(props){

    return (
        <Fragment>
            {
                props.recent?.slice(0, 3).map((pokemon, index) => (

                    <PokeRecentCard key={index} pokemon={pokemon}/>
                ))
            }
        </Fragment>
    )
}

export default PokeRecent;