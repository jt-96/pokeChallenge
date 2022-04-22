import { Fragment, useState } from "react";
import SearchBar from "../searchBar/searchBar";
import './navBar.css';

function NavBar(props) {

    const [isEnabled, setIsEnabled] = useState(false);

    function handleClick() {
        setIsEnabled(!isEnabled);
    }

    function handleChange(param) {
        props.onAddSearchParam(param);
    }

    return (
        <Fragment>
            <div className="navbar">
                <div className="">
                    <img className="navbar__logo" src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" />
                </div>
                <div>
                    <button type="button" className="navbar__button" onClick={handleClick}>
                        <img className="navbar__logo" src={process.env.PUBLIC_URL + "/img/lupa.png"} alt="magnifying glass" />
                    </button>
                </div>
            </div>
            {
                isEnabled && <SearchBar onHandleChange={handleChange}/>
            }
        </Fragment>
    );
}

export default NavBar;