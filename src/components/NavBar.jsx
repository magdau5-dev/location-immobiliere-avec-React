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
                        width="210px"
                        height="68px"
                        onClick={() => navigate("/")}
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
