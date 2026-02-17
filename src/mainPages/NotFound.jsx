import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../navigation/Footer";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="notFound-page">
            <NavBar />

            <div className="notFound-content">
                <h4 className="notFound-404">404</h4>
                <p style={{ margin: "0px" }}>
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <a className="redirection-404" onClick={() => navigate("/")}>
                    Retournez sur la page d'accueil
                </a>
            </div>

            <Footer />
        </div>
    );
};

export default NotFound;
