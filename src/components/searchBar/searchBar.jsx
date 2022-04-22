import { Fragment, useState } from "react";

function SearchBar(props) {

    const [searchQuery, setSearchQuery] = useState('');

    function handleInput(e) {
        setSearchQuery(e.target.value);
        props.onHandleChange(e.target.value);
    }

    return (
        <Fragment>
            <span>BUSCAR POR NOMBRE</span>
            <form>
                <input type="text" name="s" value={searchQuery} onChange={handleInput} />
            </form>

            <div>
                <span>Logo</span>
                <p>BUSCA TU POKEMON POR EL NOMBRE</p>
            </div>
        </Fragment>
    )
}

export default SearchBar;