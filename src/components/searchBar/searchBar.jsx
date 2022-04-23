import { useState } from "react";
import './searchBar.css';

function SearchBar(props) {

    const [searchQuery, setSearchQuery] = useState('');

    function handleInput(e) {
        setSearchQuery(e.target.value);
        props.onHandleChange(e.target.value);
    }

    return (
        <div className="search">
            <div className="search__bar">
                <span className="search__bar__title">BUSCAR POR NOMBRE O NÚMERO</span>
                <form className="search__bar__form">
                    <input className="search__bar__input" type="text" name="s" value={searchQuery} onChange={handleInput} />
                </form>
                <span className="search__bar__subtitle">Usa la búsqueda avanzada para encontrar Pokemons por otros filtros</span>
            </div>

            <div className="search__info">
                <img className="search__info__img" src={process.env.PUBLIC_URL + `/img/info.png`} alt="info" />
                <span>BUSCA TU POKEMON POR EL NOMBRE O USANDO SU NÚMERO DE IDENTIFICACIÓN</span>
            </div>
        </div>
    )
}

export default SearchBar;