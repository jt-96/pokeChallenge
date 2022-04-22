import { Fragment } from "react";

function PokeRecent(){

    return (
        <Fragment>
            <h2><img src={process.env.PUBLIC_URL + `/img/pokeball.png`} alt="Pokeball" />RECIENTES</h2>
        </Fragment>
    )
}

export default PokeRecent;