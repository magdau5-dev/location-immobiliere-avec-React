import BoxImg from "./BoxImg";

const NavBar = () => {
    return (
        <>
            <div className="navBar-container">
                <div>
                    <BoxImg />
                </div>

                <div className="navBar-links">
                    <a href="">Accueil</a>
                    <a href="">A Propos</a>
                </div>
            </div>
        </>
    );
};
export default NavBar;
