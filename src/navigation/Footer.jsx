import { useNavigate } from "react-router-dom";
import BoxImg from "../components/BoxImg";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="footer-container">
                <BoxImg
                    src="/src/assets/logoKasa2.png"
                    alt="Logo Kasa"
                    width="122px"
                    height="39px"
                    onClick={() => navigate("/")}
                />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </>
    );
};

export default Footer;
