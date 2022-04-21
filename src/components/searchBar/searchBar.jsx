import { Fragment } from "react";

function SearchBar() {

    return (
        <Fragment>
            <span>BUSCAR POR NOMBRE O NÚMERO</span>
            <form action="">
                <input type="text" name="" id="" />
            </form>
            <span>Usa la búsqueda avanzada para encontrar Pokemons por otros filtros</span>

            <div>
                <span>Logo</span>
                <p>BUSCA TU POKEMON POR EL NOMBRE O USANDO SU NÚMERO DE IDENTIFICACION</p>
            </div>
            <button>BUSQUEDA AVANZADA</button>
        </Fragment>
    )
}

export default SearchBar;