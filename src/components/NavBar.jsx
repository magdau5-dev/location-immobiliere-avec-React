import { useNavigate } from "react-router-dom";
import BoxImg from "./BoxImg";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="navBar-container">
                <div>
                    <BoxImg
                        src="/src/assets/logoKasa.png"
                        alt="Logo Kasa"
                        onClick={() => navigate("/")}
                        className="navbar-logo"
                    />
                </div>

                <div className="navBar-links">
                    <a onClick={() => navigate("/")}>Accueil</a>
                    <a onClick={() => navigate("/about")}>A Propos</a>
                </div>
            </div>
        </>
    );
};
export default NavBar;
