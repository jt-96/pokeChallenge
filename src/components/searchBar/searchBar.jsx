import { Fragment, useState } from "react";

function SearchBar(props) {

    const [searchQuery, setSearchQuery] = useState('');

    function handleInput(e) {
        setSearchQuery(e.target.value);
        props.onHandleChange(e.target.value);
    }

    return (
        <Fragment>
            <span>BUSCAR POR NOMBRE O NÚMERO</span>
            <form>
                <input type="text" name="s" value={searchQuery} onChange={handleInput} />
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