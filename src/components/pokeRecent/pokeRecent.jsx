import { Fragment } from "react";

function PokeRecent(){

    return (
        <Fragment>
            <h1><img src={process.env.PUBLIC_URL + `/img/pokeball.png`} alt="Pokeball" />RECIENTES</h1>
        </Fragment>
    )
}

export default PokeRecent;