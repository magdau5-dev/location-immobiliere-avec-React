import { Outlet } from "react-router-dom";
import Footer from "../navigation/Footer";
import Header from "../navigation/Header";

const DefaultRoute = () => {
    return (
        <div className="layout">
            <main className="main-content">
                <Header />
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default DefaultRoute;
