import { Fragment, useState } from "react";
import SearchBar from "../searchBar/searchBar";
import './navBar.css';

function NavBar(props) {

    const [isEnabled, setIsEnabled] = useState(false);

    const handleClick = () => {
        setIsEnabled(!isEnabled);
    }

    function handleChange(param) {
        props.onAddSearchParam(param);
    }

    return (
        <Fragment>
            <div className="container">
                <div className="spacing">
                    <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" />
                </div>
                <div >
                    <button type="button" className="spacing" onClick={handleClick}>
                        <img className="glass" src={process.env.PUBLIC_URL + "/img/lupa.png"} alt="magnifying glass" />
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