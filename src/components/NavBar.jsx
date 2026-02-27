import { NavLink } from "react-router-dom";
import BoxImg from "./BoxImg";

const NavBar = () => {
    return (
        <div className="navBar-container">
            <div>
                <NavLink to="/">
                    <BoxImg
                        src="/src/assets/logoKasa.png"
                        alt="Logo Kasa"
                        className="navbar-logo"
                    />
                </NavLink>
            </div>

            <div className="navBar-links">
                <NavLink to="/" end>
                    Accueil
                </NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </div>
        </div>
    );
};

export default NavBar;
