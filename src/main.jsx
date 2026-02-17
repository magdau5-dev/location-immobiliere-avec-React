import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.sass";

import HomePage from "./mainPages/HomePage.jsx";
import Gallery from "./mainPages/Gallery.jsx";
import About from "./mainPages/About.jsx";
import DefaultRoute from "./layout/DefaultRoute.js";
import NotFound from "./mainPages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                {/* Route d'entrée */}
                <Route element={<DefaultRoute />}>
                    {/* Routes de navigation  */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/about" element={<About />} />
                </Route>

                {/* Route de redirection pour la page erreur 404 */}
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
