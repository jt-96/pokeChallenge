import { Fragment } from "react";
import './navBar.css';

function NavBar() {

    return (
        <Fragment>
            <div className="container">
                <div className="spacing">
                    <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" />
                </div>
                <div className="spacing">
                    <img className="glass" src={process.env.PUBLIC_URL + "/img/lupa.png"} alt="magnifying glass" />
                </div>
            </div>
        </Fragment>
    );
}

export default NavBar;