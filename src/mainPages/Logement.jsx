import { useParams, Navigate } from "react-router-dom";
import logementData from "../json/logement.json";
import LogementSection from "../sections/LogementSection";

const Logement = () => {
    const { id } = useParams(); // sert à récupérer l'id du logement depuis l'URL

    const logement = logementData.find((item) => item.id === id);

    // Si aucun logement ne correspond je redirige vers ma page * = 404
    if (!logement) {
        return <Navigate to="*" replace />;
    }

    return <LogementSection logement={logement} />;
};

export default Logement;
