import { Outlet } from "react-router-dom";
import Footer from "../navigation/Footer";
import Header from "../navigation/Header";

const DefaultRoute = () => {
    return (
        <div className="layout">
            <div className="header-container">
                <Header />
            </div>

            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default DefaultRoute;
